import { Routes, Route } from "react-router-dom";
import { BlogListPage } from "./pages/BlogListPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { BlogEditorPage } from "./pages/BlogEditorPage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const BlogRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route index element={<BlogListPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path=":slug" element={<BlogPostPage />} />

      {/* Protected — requires active Supabase session */}
      <Route
        path="editor"
        element={
          <ProtectedRoute>
            <BlogEditorPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
