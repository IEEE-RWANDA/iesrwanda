import Link from "next/link";

export function CTA() {
  return (
    <section className="join-section">
      <div className="site-container join-layout"><div><p className="eyebrow">There’s a place for you here</p><h2>Let’s build what comes next.</h2><p>Learn, share your experience, and help shape industrial electronics in Rwanda.</p></div><div className="button-row"><Link href="/membership" className="site-button">Join the community <span aria-hidden="true">↗</span></Link><Link href="/contact" className="text-link">Contact us <span aria-hidden="true">→</span></Link></div></div>
    </section>
  );
}
