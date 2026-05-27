// Post type — mirrors the `posts` table schema in Supabase
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_url: string | null;
  content: string; // Raw Markdown
  author: string;
  published_at: string; // ISO 8601
  is_published: boolean;
  tags: string[];
  created_at: string;
}

// Omits auto-generated fields — use this when creating or updating a post
export type PostDraft = Omit<Post, "id" | "created_at">;
