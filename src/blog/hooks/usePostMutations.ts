import type { PostDraft } from "../types/post.types";
import { supabase } from "../lib/supabase";

/**
 * CRUD mutations for posts.
 * Requires an active Supabase session — RLS enforces authenticated writes only.
 */
export function usePostMutations() {
  /** Inserts a new post and returns its slug. Throws on DB error. */
  const createPost = async (draft: PostDraft): Promise<string> => {
    const { data, error } = await supabase.from("posts").insert(draft).select("slug").single();
    if (error) throw new Error(error.message);
    return data.slug as string;
  };

  /** Partially updates a post by id. Throws on DB error. */
  const updatePost = async (id: string, draft: Partial<PostDraft>): Promise<void> => {
    const { error } = await supabase.from("posts").update(draft).eq("id", id);
    if (error) throw new Error(error.message);
  };

  /** Permanently deletes a post by id. Throws on DB error. */
  const deletePost = async (id: string): Promise<void> => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) throw new Error(error.message);
  };

  return { createPost, updatePost, deletePost };
}
