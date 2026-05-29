import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserShield, FaPenNib } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export const BlogHeader = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/blog");
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <div className="blog-auth-toolbar" style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
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
      </div>

      <Link
        to="/blog/editor"
        className="blog-fab"
        aria-label="New post"
        title="New post"
      >
        <FaPenNib size={18} />
      </Link>
    </>
  );
};
