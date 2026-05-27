import { useState, type FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaLock, FaEnvelope, FaSpinner, FaShieldAlt } from "react-icons/fa";

// Map common Supabase Auth error strings to user-friendly messages
const ERROR_MESSAGES: Record<string, string> = {
  "Invalid login credentials": "Incorrect email or password.",
  "Email not confirmed": "Please confirm your email before signing in.",
  "Too many requests": "Too many attempts. Wait a few minutes and try again.",
};

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fall back to /blog/editor if there's no previous protected route
  const from = (location.state as { from?: string })?.from ?? "/blog/editor";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const errorMsg = await login(email.trim(), password);

    if (errorMsg) {
      setError(ERROR_MESSAGES[errorMsg] ?? errorMsg);
      setIsLoading(false);
    } else {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__orb login-page__orb--1" aria-hidden="true" />
      <div className="login-page__orb login-page__orb--2" aria-hidden="true" />

      <div className="login-card">
        <div className="login-card__header">
          <div className="login-card__icon" aria-hidden="true">
            <FaShieldAlt size={22} />
          </div>
          <div>
            <h1 className="login-card__title">Admin Access</h1>
            <p className="login-card__subtitle">Blog · Management panel</p>
          </div>
        </div>

        <div className="login-card__divider" aria-hidden="true" />

        <form id="login-form" className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="login-email" className="login-label">Email</label>
            <div className="login-input-wrap">
              <span className="login-input-icon" aria-hidden="true">
                <FaEnvelope size={14} />
              </span>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(null); }}
                placeholder="admin@example.com"
                className="login-input"
                autoComplete="email"
                autoFocus
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="login-password" className="login-label">Password</label>
            <div className="login-input-wrap">
              <span className="login-input-icon" aria-hidden="true">
                <FaLock size={14} />
              </span>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(null); }}
                placeholder="••••••••"
                className="login-input"
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <div className="login-error" role="alert" aria-live="polite">
              <span className="login-error__dot" aria-hidden="true" />
              {error}
            </div>
          )}

          <button
            id="login-submit-btn"
            type="submit"
            className="login-btn"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <FaSpinner size={15} className="login-btn__spinner" />
                Signing in…
              </>
            ) : (
              <>
                <FaShieldAlt size={15} />
                Sign in
              </>
            )}
          </button>
        </form>

        <p className="login-card__note">Authorized users only.</p>
      </div>
    </div>
  );
};
