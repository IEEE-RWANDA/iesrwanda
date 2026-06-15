"use client";

import { useRef, useState } from "react";

/**
 * Background YouTube video for the Rwanda hero. Autoplay must be muted (browser
 * policy), so we expose a one-tap sound toggle that unmutes the *live* player
 * via the YouTube IFrame API (postMessage) — no reload, no restart.
 */
export function RwandaHeroVideo({ videoId }: { videoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const src =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  const send = (func: string) =>
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "https://www.youtube.com"
    );

  const toggle = () => {
    if (muted) {
      send("unMute");
      send("playVideo");
      setMuted(false);
    } else {
      send("mute");
      setMuted(true);
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <iframe
          ref={iframeRef}
          src={src}
          title="Visit Rwanda"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <button
        onClick={toggle}
        aria-label={muted ? "Turn sound on" : "Mute"}
        className="absolute bottom-6 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/20 sm:bottom-8 sm:right-8"
      >
        {muted ? (
          <>
            <SpeakerMuted /> Tap for sound
          </>
        ) : (
          <>
            <SpeakerOn /> Sound on
          </>
        )}
      </button>
    </>
  );
}

function SpeakerOn() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8 8 0 0 1 0 12" strokeLinecap="round" />
    </svg>
  );
}

function SpeakerMuted() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
      <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
    </svg>
  );
}
