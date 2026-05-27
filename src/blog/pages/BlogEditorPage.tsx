import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { CoverUploader } from "../components/CoverUploader";
import { TagBadge } from "../components/TagBadge";
import { usePostMutations } from "../hooks/usePostMutations";
import type { PostDraft } from "../types/post.types";
import { FaSave, FaEye, FaTags, FaFileAlt } from "react-icons/fa";

// Converts a title to a URL-friendly slug (strips accents, lowercases, replaces spaces)
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const BlogEditorPage = () => {
  const navigate = useNavigate();
  const { createPost } = usePostMutations();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState<string | undefined>("## Start writing here...\n\n");
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPublished, setIsPublished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Auto-generate slug from title only while the user hasn't manually edited it
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === toSlug(title)) setSlug(toSlug(val));
  };

  const addTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) setTags((t) => [...t, trimmed]);
    setTagInput("");
  };

  const removeTag = (tag: string) => setTags((t) => t.filter((x) => x !== tag));

  const handleSave = async () => {
    if (!title.trim()) { setSaveError("Title is required."); return; }
    if (!slug.trim()) { setSaveError("Slug is required."); return; }
    if (!content?.trim()) { setSaveError("Content cannot be empty."); return; }

    setIsSaving(true);
    setSaveError(null);

    const draft: PostDraft = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      cover_url: coverUrl,
      content: content ?? "",
      author: "Ariff M.",
      published_at: new Date().toISOString(),
      is_published: isPublished,
      tags,
    };

    try {
      const resultSlug = await createPost(draft);
      navigate(resultSlug ? `/blog/${resultSlug}` : "/blog");
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to save post.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="blog-editor-page">
      <div className="blog-editor-header">
        <div className="blog-editor-header__left">
          <FaFileAlt size={18} />
          <h1 className="blog-editor-header__title">New post</h1>
        </div>
        <div className="blog-editor-header__actions">
          <label className="blog-editor-publish-toggle">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              id="publish-toggle"
            />
            <span>{isPublished ? "Publish" : "Draft"}</span>
          </label>
          <button
            id="save-post-btn"
            className="hero-btn-primary blog-editor-save-btn"
            onClick={handleSave}
            disabled={isSaving}
          >
            <FaSave size={14} />
            {isSaving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {saveError && (
        <div className="blog-editor-error" role="alert">{saveError}</div>
      )}

      <div className="blog-editor-layout">
        <div className="blog-editor-main">
          <div className="blog-editor-meta-fields">
            <div className="blog-editor-field">
              <label htmlFor="post-title" className="blog-editor-label">Title</label>
              <input
                id="post-title"
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Post title"
                className="blog-editor-input"
                autoFocus
              />
            </div>

            <div className="blog-editor-field">
              <label htmlFor="post-slug" className="blog-editor-label">
                Slug <span className="blog-editor-label__hint">(URL path)</span>
              </label>
              <input
                id="post-slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="my-awesome-post"
                className="blog-editor-input blog-editor-input--mono"
              />
            </div>

            <div className="blog-editor-field">
              <label htmlFor="post-excerpt" className="blog-editor-label">
                Excerpt <span className="blog-editor-label__hint">(shown on card)</span>
              </label>
              <textarea
                id="post-excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short description of the post…"
                className="blog-editor-textarea"
                rows={2}
              />
            </div>

            <div className="blog-editor-field">
              <label className="blog-editor-label">
                <FaTags size={12} /> Tags
              </label>
              <div className="blog-editor-tags-row">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); }
                  }}
                  placeholder="Add tag…"
                  className="blog-editor-input blog-editor-tags-input"
                />
                <button type="button" onClick={addTag} className="hero-btn-secondary blog-editor-tag-add-btn">
                  +
                </button>
              </div>
              {tags.length > 0 && (
                <div className="blog-editor-tags-list">
                  {tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} onClick={() => removeTag(tag)} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="blog-editor-md-wrap" data-color-mode="dark">
            <div className="blog-editor-section-label">
              <FaEye size={12} />
              Content (Markdown)
            </div>
            <MDEditor
              value={content}
              onChange={setContent}
              height={520}
              preview="live"
              className="blog-editor-md"
            />
          </div>
        </div>

        <aside className="blog-editor-sidebar">
          <div className="blog-editor-section-label">Cover image</div>
          <CoverUploader value={coverUrl} onChange={setCoverUrl} />
        </aside>
      </div>
    </div>
  );
};
