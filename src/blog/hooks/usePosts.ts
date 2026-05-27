import { useState, useEffect } from "react";
import type { Post } from "../types/post.types";
import { supabase } from "../lib/supabase";

export interface UsePostsResult {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

/** Fetches all published posts ordered by publish date descending. */
export function usePosts(): UsePostsResult {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error: sbError } = await supabase
          .from("posts")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false });

        if (sbError) throw sbError;
        if (!controller.signal.aborted) setPosts(data ?? []);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Failed to load posts");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, [trigger]);

  return { posts, isLoading, error, refetch: () => setTrigger((t) => t + 1) };
}
