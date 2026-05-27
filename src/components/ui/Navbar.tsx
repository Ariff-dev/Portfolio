import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon, FaPenNib, FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { useTheme } from "../../hooks";
import { useAuth } from "../../blog/hooks/useAuth";

// Hash anchors scroll within the home page; path entries use React Router.

interface NavItem {
  name: string;
  /** hash = anchor scroll en / | path = ruta real */
  tag: string;
  type: "hash" | "path";
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home",       tag: "#hero",      type: "hash" },
  { name: "Experience", tag: "#exp",       type: "hash" },
  { name: "Stack",      tag: "#stack",     type: "hash" },
  { name: "Portfolio",  tag: "#portfolio", type: "hash" },
  { name: "About",      tag: "#about",     type: "hash" },
  { name: "Blog",       tag: "/blog",      type: "path" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isOnHome = location.pathname === "/";
  const isOnBlog = location.pathname.startsWith("/blog");

  // ── Scroll: detect active section (solo en Home) ──
  const handleScroll = useCallback(() => {
    if (!isOnHome) return;
    let current = "";
    for (const { tag, type } of NAV_ITEMS) {
      if (type !== "hash") continue;
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
  }, [isOnHome]);

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
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const ThemeIcon = theme === "dark" ? FaSun : FaMoon;

  const handleLogout = async () => {
    await logout();
    navigate("/blog");
    setIsMenuOpen(false);
  };

  const isActive = (item: NavItem) => {
    if (item.type === "path") return location.pathname.startsWith(item.tag);
    return activeSection === item.tag;
  };

  const handleNavClick = (item: NavItem, closeMobile = false) => {
    if (closeMobile) setIsMenuOpen(false);
    if (item.type === "path") return;
    if (!isOnHome) {
      navigate("/" + item.tag);
    }
  };

  const renderDesktopItem = (item: NavItem) => {
    const active = isActive(item);
    const className = `navbar-link ${active ? "navbar-link--active" : ""} ${item.type === "path" ? "navbar-link--route" : ""}`;

    if (item.type === "path") {
      return (
        <Link key={item.tag} to={item.tag} className={className}>
          {item.name}
          {active && <span className="navbar-link__dot" aria-hidden="true" />}
        </Link>
      );
    }
    return (
      <a
        key={item.tag}
        href={isOnHome ? item.tag : `/${item.tag}`}
        className={className}
        onClick={() => handleNavClick(item)}
      >
        {item.name}
        {active && <span className="navbar-link__dot" aria-hidden="true" />}
      </a>
    );
  };

  const renderDrawerItem = (item: NavItem) => {
    const active = isActive(item);
    const className = `drawer-link ${active ? "drawer-link--active" : ""}`;

    if (item.type === "path") {
      return (
        <Link
          key={item.tag}
          to={item.tag}
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }
    return (
      <a
        key={item.tag}
        href={isOnHome ? item.tag : `/${item.tag}`}
        className={className}
        onClick={() => handleNavClick(item, true)}
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
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

        <div className="navbar__desktop">
          {NAV_ITEMS.map(renderDesktopItem)}
          <div className="navbar__separator" />

          {isAuthenticated && isOnBlog && (
            <>
              <div className="navbar-session-chip">
                <FaUserShield size={11} />
                <span className="navbar-session-chip__email">
                  {user?.email?.split("@")[0]}
                </span>
              </div>
              <button
                className="navbar-logout-btn"
                onClick={handleLogout}
                aria-label="Sign out"
                title="Sign out"
              >
                <FaSignOutAlt size={13} />
              </button>
            </>
          )}

          <button
            className="theme-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <ThemeIcon size={15} />
          </button>
        </div>
      </nav>

      <div
        className={`drawer-overlay ${isMenuOpen ? "drawer-overlay--open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

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
          {NAV_ITEMS.map(renderDrawerItem)}

          {isAuthenticated && isOnBlog && (
            <button
              className="drawer-link drawer-logout-link"
              onClick={handleLogout}
            >
              <FaSignOutAlt size={13} style={{ marginRight: 8 }} />
              Sign out
            </button>
          )}
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

      {/* Show the editor FAB only to authenticated users */}
      {isOnBlog && isAuthenticated && (
        <Link
          to="/blog/editor"
          className="blog-fab"
          aria-label="New post"
          title="New post"
        >
          <FaPenNib size={18} />
        </Link>
      )}
    </>
  );
};
