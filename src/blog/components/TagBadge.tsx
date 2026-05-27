interface TagBadgeProps {
  tag: string;
  size?: "sm" | "md";
  onClick?: () => void;
}

export const TagBadge = ({ tag, size = "md", onClick }: TagBadgeProps) => {
  return (
    <span
      className={`tag-badge tag-badge--${size}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {tag}
    </span>
  );
};
