import { useParams, Navigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import { ArticleHero } from "../components/ArticleHero";
import { ArticleContent } from "../components/ArticleContent";
import { FaSpinner } from "react-icons/fa";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, isLoading, error } = usePost(slug);

  if (isLoading) {
    return (
      <div className="blog-post-state">
        <FaSpinner size={22} className="blog-list-spinner" />
        <span>Loading post…</span>
      </div>
    );
  }

  // Redirect to list if the post doesn't exist
  if (error === "Post not found") {
    return <Navigate to="/blog" replace />;
  }

  if (error || !post) {
    return (
      <div className="blog-post-state blog-post-state--error">
        <p>Failed to load post.</p>
        {error && <p className="blog-list-state__detail">{error}</p>}
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <ArticleHero post={post} />
      <div className="blog-post-body">
        <ArticleContent content={post.content} />
      </div>
    </div>
  );
};
