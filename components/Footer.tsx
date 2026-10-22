import Link from "next/link";
import { chapter, footerNav, socials } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="site-footer"><div className="site-container">
      <div className="footer-grid"><div>
        <Link href="/" className="footer-brand">IEEE IES <span>Rwanda Chapter</span></Link>
        <p>Connecting people, knowledge and industry through the IEEE Industrial Electronics Society.</p><p>{chapter.location}<br />{chapter.parentSection}</p>
        <div className="footer-socials">{socials.map((social) => <a key={social.key} href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer"><SocialIcon name={social.key} className="h-[18px] w-[18px]" /></a>)}</div>
      </div><div><h3>Our chapter</h3><ul>{footerNav.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
      <div><h3>The IEEE network</h3><ul><li><a href="https://ieeerwanda.org/">IEEE Rwanda</a></li><li><a href="https://www.ieee-ies.org/">Industrial Electronics Society</a></li><li><a href="https://sac.ieeerwanda.org/">Student Activities Committee</a></li><li><a href="https://grss.ieeerwanda.org/">GRSS Rwanda</a></li><li><a href="https://alu.ieeerwanda.org/">ALU Student Branch</a></li><li><a href="https://www.ieee.org/">IEEE.org</a></li></ul></div>
      <div><h3>Stay connected</h3><p>Questions, ideas or an opportunity to work together?</p><Link href="/contact" className="footer-contact">Contact the chapter →</Link><a href={`mailto:${chapter.email}`}>{chapter.email}</a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} IEEE IES Rwanda Chapter</span><div><a href="https://www.ieee.org/security-privacy.html">Privacy policy</a><a href="https://www.ieee.org/accessibility-statement.html">Accessibility</a><a href="#main">Back to top ↑</a></div></div>
    </div></footer>
  );
}
