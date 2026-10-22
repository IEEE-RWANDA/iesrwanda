"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ieeeJoinUrl } from "@/lib/site";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Leadership", href: "/leadership" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="utility-bar">
        <div className="site-container utility-content">
          <span>Industrial Electronics Society · Rwanda Chapter</span>
          <div>
            <a href="https://ieeerwanda.org/">IEEE Rwanda</a>
            <a href="https://www.ieee.org/">IEEE.org</a>
            <a href="https://ieeexplore.ieee.org/">IEEE Xplore</a>
            <a href={ieeeJoinUrl}>Join IEEE</a>
          </div>
        </div>
      </div>
      <nav className="site-container main-navigation" aria-label="Main navigation">
        <Link href="/" className="chapter-brand" aria-label="IEEE IES Rwanda home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ies-logo.png" alt="IEEE Industrial Electronics Society" width="112" height="56" />
          <span><strong>Rwanda Chapter</strong><small>Industrial Electronics Society</small></span>
        </Link>
        <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <div id="site-navigation" className={`navigation-links ${open ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
          <Link className="site-button" href="/membership">Get involved <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
