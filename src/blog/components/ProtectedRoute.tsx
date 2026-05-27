import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Wraps private routes. Redirects to /blog/login if unauthenticated,
 * preserving the intended path in location.state.from for post-login redirect.
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="blog-post-state">
        <FaSpinner size={22} className="blog-list-spinner" />
        <span>Verifying session…</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/blog/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
