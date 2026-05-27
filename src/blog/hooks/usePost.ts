import { useState, useEffect } from "react";
import type { Post } from "../types/post.types";
import { supabase } from "../lib/supabase";

export interface UsePostResult {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
}

/** Fetches a single published post by slug. Sets error to "Post not found" on PGRST116. */
export function usePost(slug: string | undefined): UsePostResult {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No slug provided");
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error: sbError } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();

        // PGRST116 = no rows returned
        if (sbError) {
          throw new Error(sbError.code === "PGRST116" ? "Post not found" : sbError.message);
        }

        if (!controller.signal.aborted) setPost(data as Post);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Failed to load post");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchPost();
    return () => controller.abort();
  }, [slug]);

  return { post, isLoading, error };
}
