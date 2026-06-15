"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { feature } from "topojson-client";
import "leaflet/dist/leaflet.css";
import { SectionLabel } from "./SectionLabel";
import { iesHubs, hubByCountry } from "@/lib/iesHubs";
import world from "@/lib/world-110m.json";

type LatLng = [number, number];

const LEVELS: {
  crumb: string;
  title: string;
  blurb: string;
  hint: string | null;
  center: LatLng;
  zoom: number;
}[] = [
  {
    crumb: "Global",
    title: "A worldwide society",
    blurb:
      "The IES connects 10,000+ members worldwide through regional Hubs — each built from local Nodes. Start global, then dive in.",
    hint: "Africa",
    center: [12, 8],
    zoom: 2,
  },
  {
    crumb: "Africa",
    title: "Hubs across Africa",
    blurb: "Across the continent, IES Hubs bring the society closer to engineers in every region.",
    hint: "the East African Hub",
    center: [2, 21],
    zoom: 3,
  },
  {
    crumb: "East African Hub",
    title: "The East African Hub",
    blurb: "Rwanda belongs to the East African Hub — a cluster of national Nodes working side by side.",
    hint: "Rwanda",
    center: [-2, 33],
    zoom: 5,
  },
  {
    crumb: "Rwanda Node",
    title: "You are here: the Rwanda Node",
    blurb:
      "We are the Rwanda Node — the IEEE IES Rwanda Chapter, your local home for industrial electronics.",
    hint: null,
    center: [-1.94, 29.87],
    zoom: 8,
  },
];

const KIGALI: LatLng = [-1.9441, 30.0619];

export function HubsNodesMap() {
  const [level, setLevel] = useState(0);
  const interacted = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  // init Leaflet once (dynamic import keeps it off the server)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: LEVELS[0].center,
        zoom: LEVELS[0].zoom,
        zoomControl: true,
        scrollWheelZoom: false, // don't hijack page scroll
        attributionControl: true,
        worldCopyJump: true,
        minZoom: 2,
        maxZoom: 12,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(map);

      // paint IES hub countries (choropleth from hubs.ieee-ies.org)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geo = feature(world as any, (world as any).objects.countries) as any;
      L.geoJSON(geo, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style: (f: any) => {
          const m = hubByCountry[f.properties.name];
          return m
            ? { fillColor: m.color, fillOpacity: 0.62, color: "#ffffff", weight: 0.8 }
            : { fillOpacity: 0, weight: 0, stroke: false, interactive: false };
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEachFeature: (f: any, layer: any) => {
          const m = hubByCountry[f.properties.name];
          if (m) {
            layer.bindTooltip(`${m.hub} — ${f.properties.name}`, { sticky: true });
            layer.on("mouseover", () => layer.setStyle({ fillOpacity: 0.85 }));
            layer.on("mouseout", () => layer.setStyle({ fillOpacity: 0.62 }));
          }
        },
      }).addTo(map);

      // pulsing Rwanda node marker (on-brand divIcon, no broken default images)
      const icon = L.divIcon({
        className: "",
        html: `<div class="relative -translate-x-1/2 -translate-y-1/2">
                 <span class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC8C00] opacity-40 animate-ping"></span>
                 <span class="relative block h-3.5 w-3.5 rounded-full bg-[#EC8C00] ring-2 ring-white"></span>
               </div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });
      L.marker(KIGALI, { icon })
        .addTo(map)
        .bindTooltip("Rwanda Node — IEEE IES Rwanda", {
          permanent: true,
          direction: "right",
          offset: [10, 0],
          className: "ies-node-label",
        });

      mapRef.current = map;
      setReady(true);
      setTimeout(() => map.invalidateSize(), 60);
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // fly to the active level
  useEffect(() => {
    if (!ready || !mapRef.current) return;
    const l = LEVELS[level];
    mapRef.current.flyTo(l.center, l.zoom, { duration: 1.6 });
  }, [level, ready]);

  // gentle one-time auto drill-down; stops on interaction
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      if (interacted.current) return;
      setLevel((l) => {
        if (l >= LEVELS.length - 1) return l;
        t = setTimeout(step, 4200);
        return l + 1;
      });
    };
    t = setTimeout(step, 4200);
    return () => clearTimeout(t);
  }, []);

  const go = (l: number) => {
    interacted.current = true;
    setLevel(Math.max(0, Math.min(LEVELS.length - 1, l)));
  };

  const lv = LEVELS[level];
  const atEnd = level === LEVELS.length - 1;

  return (
    <section className="relative bg-ink py-20 sm:py-28">
      <style>{`
        .ies-node-label{background:#0E1C2B;color:#fff;border:none;border-radius:9999px;
          font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;
          padding:3px 9px;box-shadow:0 2px 8px rgba(0,0,0,.25);font-weight:600}
        .ies-node-label::before{display:none}
        .leaflet-container{background:#EFF3F6;font-family:var(--font-sans)}
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <SectionLabel index="01">Hubs &amp; Nodes</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
            Find Rwanda on the IES map.
          </h2>
          <p className="mt-4 text-paper/60">
            The IES is organised into regional <span className="text-paper">Hubs</span> made of local{" "}
            <span className="text-paper">Nodes</span>. Watch it narrow from the globe down to us — or
            drag, zoom and click your way in.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* the real map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-paper/10 sm:aspect-[16/10]">
            <div ref={containerRef} className="absolute inset-0 z-0" />
            <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-full border border-paper/10 bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper/60 backdrop-blur-sm">
              {level + 1} / {LEVELS.length} · {lv.crumb}
            </div>
          </div>

          {/* controls */}
          <div className="flex flex-col justify-between rounded-3xl border border-paper/10 bg-ink-soft p-7 sm:p-9">
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
                {LEVELS.map((l, i) => (
                  <span key={l.crumb} className="flex items-center gap-2">
                    <button
                      onClick={() => go(i)}
                      className={`transition-colors ${
                        i === level
                          ? "text-signal"
                          : i < level
                            ? "text-paper/70 hover:text-paper"
                            : "text-paper/30 hover:text-paper/60"
                      }`}
                    >
                      {l.crumb}
                    </button>
                    {i < LEVELS.length - 1 && <span className="text-paper/25">▸</span>}
                  </span>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight">
                    {lv.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-paper/65">{lv.blurb}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => go(level - 1)}
                disabled={level === 0}
                className="rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30"
              >
                ◂ Back
              </button>
              {!atEnd ? (
                <button
                  onClick={() => go(level + 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-2.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
                >
                  Zoom into {lv.hint} ▸
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-leaf/15 px-5 py-2.5 text-sm font-semibold text-leaf">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-leaf" />
                  You are here
                </span>
              )}
            </div>
          </div>
        </div>

        {/* hub legend */}
        <div className="mt-6 rounded-2xl border border-paper/10 bg-ink-soft p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              IES Hubs — painted by region
            </span>
            <a
              href="https://hubs.ieee-ies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-wider text-signal hover:underline"
            >
              hubs.ieee-ies.org ↗
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
            {iesHubs.map((h) => (
              <span key={h.name} className="flex items-center gap-2 text-sm text-paper/75">
                <span
                  className="inline-block h-3 w-3 rounded-[3px] ring-1 ring-black/10"
                  style={{ backgroundColor: h.color }}
                />
                {h.name}
                {h.name === "Hub East Africa" && (
                  <span className="rounded-full bg-signal/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-signal">
                    ours
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
