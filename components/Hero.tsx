import Link from "next/link";

export function Hero() {
  return (
    <section className="chapter-hero" aria-labelledby="hero-title">
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">IEEE IES · Kigali, Rwanda</p>
          <h1 id="hero-title">Connecting people.<br />Advancing <span>industry.</span></h1>
          <p className="hero-intro">A community for the people building Rwanda’s industrial future. Explore electronics, robotics and automation with engineers, researchers and students.</p>
          <div className="button-row">
            <Link href="/membership" className="site-button">Become a member <span aria-hidden="true">↗</span></Link>
            <Link href="/events" className="text-link">Explore our activities <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <figure className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/events/volkswagen-visit-highlight.jpg" alt="Students and engineers learning together during the IEEE industrial visit to Volkswagen Rwanda" fetchPriority="high" width="1600" height="1066" />
          <figcaption><span className="photo-marker" />Learning where industry happens.<small>Volkswagen Rwanda · July 2026</small></figcaption>
        </figure>
      </div>
      <div className="hero-bottom site-container"><span>Engineered locally. Connected globally.</span><a href="#community">Discover IES Rwanda <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
