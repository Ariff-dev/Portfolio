import { usePosts } from "../hooks/usePosts";
import { ArticleCard } from "../components/ArticleCard";
import { FaRss, FaSpinner } from "react-icons/fa";

export const BlogListPage = () => {
  const { posts, isLoading, error } = usePosts();

  return (
    <div className="blog-list-page">
      <header className="blog-list-header">
        <div className="blog-list-header__icon" aria-hidden="true">
          <FaRss size={20} />
        </div>
        <div>
          <h1 className="blog-list-header__title">Blog</h1>
          <p className="blog-list-header__subtitle">
            Articles on development, design & technology.
          </p>
        </div>
      </header>

      {isLoading && (
        <div className="blog-list-state">
          <FaSpinner size={22} className="blog-list-spinner" />
          <span>Loading posts…</span>
        </div>
      )}

      {error && !isLoading && (
        <div className="blog-list-state blog-list-state--error">
          <p>Failed to load posts.</p>
          <p className="blog-list-state__detail">{error}</p>
        </div>
      )}

      {!isLoading && !error && posts.length === 0 && (
        <div className="blog-list-state">
          <p>No published posts yet.</p>
        </div>
      )}

      {!isLoading && !error && posts.length > 0 && (
        <div className="blog-list-grid">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
