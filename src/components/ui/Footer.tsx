import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#exp" },
  { label: "Stack", href: "#stack" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Ariff-dev" },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ariff-martinez",
  },
  { label: "Email", icon: FaEnvelope, href: "mailto:ariff.dev24@gmail.com" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Top divider */}
      <div className="site-footer__divider" />

      <div className="site-footer__inner">
        {/* Left: brand + tagline */}
        <div className="site-footer__brand">
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: "var(--primary)" }}
          >
            AM
          </span>
          <p
            className="text-xs mt-1 leading-relaxed max-w-[200px]"
            style={{ color: "var(--text-muted)" }}
          >
            Software Developer & Analyst.
            <br />
            Building FinTech, one feature at a time.
          </p>
        </div>

        {/* Center: nav links */}
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="site-footer__nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: social icons */}
        <div className="site-footer__social">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="site-footer__social-icon"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="site-footer__bottom">
        <span>© {year} Ariff Martinez</span>
        <span className="flex items-center gap-1.5">
          Built with
          <FaHeart size={10} style={{ color: "var(--complementary)" }} />
          React & TypeScript
        </span>
      </div>
    </footer>
  );
};
