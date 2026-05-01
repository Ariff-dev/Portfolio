import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks";

interface NavItem {
  name: string;
  tag: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", tag: "#hero" },
  { name: "Experience", tag: "#exp" },
  { name: "Stack", tag: "#stack" },
  { name: "About", tag: "#about" },
  { name: "Portfolio", tag: "#portfolio" },
  { name: "Contact", tag: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  // ── Scroll: detect active section ──
  const handleScroll = useCallback(() => {
    let current = "";
    for (const { tag } of NAV_ITEMS) {
      const el = document.getElementById(tag.slice(1));
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = tag;
          break;
        }
      }
    }
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Close drawer on Escape ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ── Lock body scroll when drawer open ──
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const ThemeIcon = theme === "dark" ? FaSun : FaMoon;

  return (
    <>
      {/* ══ NAVBAR BAR ══ */}
      <nav className="navbar" aria-label="Main navigation">
        {/* Mobile */}
        <div className="navbar__mobile">
          <span className="navbar__logo">AM</span>
          <div className="flex items-center gap-2">
            <button
              className="theme-btn"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon size={15} />
            </button>
            <button
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="navbar__desktop">
          {NAV_ITEMS.map(({ tag, name }) => (
            <a
              key={tag}
              href={tag}
              className={`navbar-link ${activeSection === tag ? "navbar-link--active" : ""}`}
            >
              {name}
              {activeSection === tag && (
                <span className="navbar-link__dot" aria-hidden="true" />
              )}
            </a>
          ))}
          <div className="navbar__separator" />
          <button
            className="theme-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <ThemeIcon size={15} />
          </button>
        </div>
      </nav>

      {/* ══ DRAWER OVERLAY (mobile) ══ */}
      <div
        className={`drawer-overlay ${isMenuOpen ? "drawer-overlay--open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ══ DRAWER PANEL (mobile) ══ */}
      <aside
        className={`drawer ${isMenuOpen ? "drawer--open" : ""}`}
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer__header">
          <span className="navbar__logo">AM</span>
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <nav className="drawer__nav">
          {NAV_ITEMS.map(({ tag, name }) => (
            <a
              key={tag}
              href={tag}
              className={`drawer-link ${activeSection === tag ? "drawer-link--active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="drawer__footer">
          <button
            className="theme-btn"
            onClick={toggle}
            style={{
              width: "100%",
              borderRadius: "10px",
              height: "40px",
              gap: "8px",
              fontSize: "0.8125rem",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <ThemeIcon size={15} />
            <span style={{ fontWeight: 500, color: "var(--text-muted)" }}>
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};
