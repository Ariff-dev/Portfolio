import type { Post } from "../types/post.types";
import { TagBadge } from "./TagBadge";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

/** Returns a relative time string (Today / Yesterday / N days ago / formatted date). */
function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

interface ArticleCardProps {
  post: Post;
}

export const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="article-card" aria-label={`Read: ${post.title}`}>
      <div className="article-card__cover">
        {post.cover_url ? (
          <img src={post.cover_url} alt={post.title} className="article-card__cover-img" loading="lazy" />
        ) : (
          <div className="article-card__cover-placeholder" aria-hidden="true">
            <span className="article-card__cover-initials">{post.title.charAt(0)}</span>
          </div>
        )}
        <div className="article-card__cover-overlay" />
        {post.tags.length > 0 && (
          <div className="article-card__tags-overlay">
            {post.tags.slice(0, 2).map((tag) => (
              <TagBadge key={tag} tag={tag} size="sm" />
            ))}
          </div>
        )}
      </div>

      <div className="article-card__body">
        <h2 className="article-card__title">{post.title}</h2>
        <p className="article-card__excerpt">{post.excerpt}</p>
        <div className="article-card__meta">
          <span className="article-card__meta-item">
            <FaUser size={11} />
            {post.author}
          </span>
          <span className="article-card__meta-sep" aria-hidden="true" />
          <span className="article-card__meta-item">
            <FaCalendarAlt size={11} />
            {timeAgo(post.published_at)}
          </span>
        </div>
      </div>
    </Link>
  );
};
