import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { conferences, events, pillars } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="community" className="home-section site-container community-intro">
        <div><p className="eyebrow">Our chapter</p><h2>A local community.<br />A world of possibilities.</h2></div>
        <div><p className="section-intro">We bring the IEEE Industrial Electronics Society to Rwanda, connecting technical learning with the challenges and opportunities of industry.</p><p>Through industrial visits, technical conversations and shared projects, students, researchers and professionals find people to learn from and ideas to build on.</p><Link href="/about" className="text-link">Get to know IES Rwanda <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="home-section activity-section">
        <div className="site-container">
          <div className="section-heading"><div><p className="eyebrow">Life in the chapter</p><h2>Ideas meet the real world.</h2></div><Link href="/events" className="text-link">All events & activities <span aria-hidden="true">→</span></Link></div>
          <div className="activity-grid">
            {events.filter((event) => event.status === "past" && event.image).slice(0, 3).map((event) => (
              <article key={event.title} className="activity-card">
                <Link href="/events" aria-label={`Explore ${event.title}`} className="activity-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.image} alt={event.title} loading="lazy" width="800" height="533" />
                  <span>{event.kind}</span>
                </Link>
                <div className="activity-copy"><p className="event-date">{event.when}</p><h3><Link href="/events">{event.title}</Link></h3><p>{event.body}</p><Link href="/events" className="text-link">Explore the activity <span aria-hidden="true">↗</span></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section site-container">
        <div className="section-heading"><div><p className="eyebrow">Our field of interest</p><h2>The technology behind industry.</h2></div><p>From a sensor to an intelligent factory, discover the disciplines that bring our community together.</p></div>
        <div className="focus-grid">{pillars.map((pillar) => <article key={pillar.id}><span className="focus-symbol" aria-hidden="true">{pillar.title === "Electronics" ? "⏚" : pillar.title === "Controls" ? "⌘" : pillar.title === "Communications" ? "↔" : pillar.title === "Instrumentation" ? "⌁" : "✳"}</span><h3>{pillar.title}</h3><p>{pillar.body}</p></article>)}</div>
      </section>

      <section className="network-section home-section">
        <div className="site-container network-layout"><div><p className="eyebrow">Part of something bigger</p><h2>Rooted in Rwanda.<br />Connected through IEEE.</h2><p>Our chapter is part of a wider community of engineers, students and volunteers. Find your technical home and meet the people moving technology forward.</p><Link href="/leadership" className="site-button">Meet our leadership <span aria-hidden="true">→</span></Link></div><div className="network-links">{[
          ["IEEE Rwanda", "Our local IEEE community", "https://ieeerwanda.org/"],
          ["Industrial Electronics Society", "Our global technical society", "https://www.ieee-ies.org/"],
          ["Student Activities Committee", "Supporting Rwanda’s student branches", "https://sac.ieeerwanda.org/"],
          ["Industry partnerships", "Connect your organisation with our chapter", "/partners"],
        ].map(([title, description, href]) => <a key={title} href={href}><span><strong>{title}</strong><small>{description}</small></span><span aria-hidden="true">↗</span></a>)}</div></div>
      </section>

      <section className="home-section site-container learning-layout">
        <div><p className="eyebrow">Keep exploring</p><h2>Your next idea<br />starts with learning.</h2><p>Find technical talks, tutorials and research from across the Industrial Electronics Society.</p><Link href="/resources" className="text-link">Explore learning resources <span aria-hidden="true">→</span></Link></div>
        <div><p className="eyebrow">Meet the global IES community</p><div className="conference-list">{conferences.map((conference) => <a key={conference.acronym} href={conference.url} target="_blank" rel="noopener noreferrer"><strong>{conference.acronym}</strong><span>{conference.name}</span><span aria-hidden="true">↗</span></a>)}</div></div>
      </section>
      <CTA />
    </>
  );
}
