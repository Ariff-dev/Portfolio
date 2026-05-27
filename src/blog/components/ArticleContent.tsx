import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleContentProps {
  content: string;
}

/**
 * Renders raw Markdown as styled HTML.
 * Each element maps to a BEM class defined in index.css (article-md-*).
 * GFM is enabled for tables, strikethrough, and task lists.
 */
export const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <article className="article-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="article-md-h1">{children}</h1>,
          h2: ({ children }) => <h2 className="article-md-h2">{children}</h2>,
          h3: ({ children }) => <h3 className="article-md-h3">{children}</h3>,
          p: ({ children }) => <p className="article-md-p">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="article-md-link" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          code: ({ className, children, ...props }) => {
            const isBlock = className?.startsWith("language-");
            return isBlock ? (
              <code className={`article-md-code-block ${className ?? ""}`} {...props}>
                {children}
              </code>
            ) : (
              <code className="article-md-code-inline" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="article-md-pre">{children}</pre>,
          ul: ({ children }) => <ul className="article-md-ul">{children}</ul>,
          ol: ({ children }) => <ol className="article-md-ol">{children}</ol>,
          li: ({ children }) => <li className="article-md-li">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="article-md-blockquote">{children}</blockquote>
          ),
          hr: () => <hr className="article-md-hr" />,
          img: ({ src, alt }) => (
            <img src={src} alt={alt ?? ""} className="article-md-img" loading="lazy" />
          ),
          table: ({ children }) => (
            <div className="article-md-table-wrapper">
              <table className="article-md-table">{children}</table>
            </div>
          ),
          th: ({ children }) => <th className="article-md-th">{children}</th>,
          td: ({ children }) => <td className="article-md-td">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
