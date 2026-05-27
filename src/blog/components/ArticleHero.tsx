import type { Post } from "../types/post.types";
import { TagBadge } from "./TagBadge";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface ArticleHeroProps {
  post: Post;
}

export const ArticleHero = ({ post }: ArticleHeroProps) => {
  return (
    <header className="article-hero">
      <div className="article-hero__bg" aria-hidden="true">
        {post.cover_url ? (
          <img src={post.cover_url} alt="" className="article-hero__bg-img" />
        ) : (
          <div className="article-hero__bg-fallback" />
        )}
        <div className="article-hero__bg-overlay" />
      </div>

      <div className="article-hero__content">
        <Link to="/blog" className="article-hero__back">
          <FaArrowLeft size={13} />
          Back to blog
        </Link>

        {post.tags.length > 0 && (
          <div className="article-hero__tags">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} size="md" />
            ))}
          </div>
        )}

        <h1 className="article-hero__title">{post.title}</h1>

        {post.excerpt && (
          <p className="article-hero__excerpt">{post.excerpt}</p>
        )}

        <div className="article-hero__meta">
          <span className="article-hero__meta-chip">
            <FaUser size={12} />
            {post.author}
          </span>
          <span className="article-hero__meta-sep" aria-hidden="true" />
          <span className="article-hero__meta-chip">
            <FaCalendarAlt size={12} />
            {formatDate(post.published_at)}
          </span>
        </div>
      </div>
    </header>
  );
};
