import { FaArrowRight } from "react-icons/fa";
import type { Project } from "../interfaces";
import { TechTag } from "./TechTag";

export const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <div
    className="portfolio-card"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
  >
    {/* Image */}
    <div className="portfolio-card__img-wrap">
      <img
        src={project.image}
        alt={project.title}
        className="portfolio-card__img"
      />
      <div className="portfolio-card__img-overlay" />
      {project.inDevelopment && (
        <span className="portfolio-card__dev-badge">In Development</span>
      )}
    </div>

    {/* Body */}
    <div className="portfolio-card__body">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4
          className="text-base sm:text-lg font-bold leading-snug"
          style={{ color: "var(--primary)" }}
        >
          {project.title}
        </h4>
        <span
          className="text-xs flex-shrink-0 mt-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          {project.date}
        </span>
      </div>

      <p
        className="text-sm leading-relaxed mb-3"
        style={{ color: "var(--text-muted)" }}
      >
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.technologies.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      <div
        className="flex items-center gap-1.5 text-xs font-medium"
        style={{ color: "var(--complementary)" }}
      >
        <span>View details</span>
        <FaArrowRight size={10} />
      </div>
    </div>
  </div>
);
