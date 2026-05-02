import { useState } from "react";
import { FaExternalLinkAlt, FaTimes, FaGithub, FaCode } from "react-icons/fa";
import PrestigeAgency from "../../assets/portfolio/prestige_agency_p.png";
import Dashboard from "../../assets/portfolio/dashboard.png";
import HybridgeCommunity from "../../assets/portfolio/hybridgecommunity.png";
import { ProjectCard, TechTag } from "../components";
import type { Project } from "../interfaces";

/* ── Data ── */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Landing Page — Prestige Agency",
    image: PrestigeAgency,
    shortDescription:
      "Professional landing page for an insurance agency with a modern design and smooth user experience.",
    fullDescription:
      "Developed a complete landing page for Prestige Agency, an insurance brokerage firm. The project features a modern, responsive layout with smooth animations, intuitive navigation, and optimized performance. Built custom components to highlight services, team members, and client testimonials, resulting in better user engagement and higher conversion rates.",
    technologies: ["React", "Tailwind CSS", "HTML5"],
    link: "https://prestigeagencyyllc.com/",
    date: "August 2024",
  },
  {
    id: 2,
    title: "Sales Dashboard",
    image: Dashboard,
    shortDescription:
      "Interactive sales analytics dashboard with real-time data visualization.",
    fullDescription:
      "Created a sales dashboard application that delivers real-time analytics and insights for the sales team. Includes interactive charts built with D3.js, customizable filters, performance indicators, and data export options. The dashboard integrates with a PHP backend and MySQL database to ensure accurate, up-to-date sales information that supports data-driven decisions.",
    technologies: ["React", "D3.js", "PHP", "MySQL"],
    link: "https://prestigeagencyyllc.com/app/",
    date: "October 2024",
  },
  {
    id: 3,
    title: "Hybridge Community Platform",
    image: HybridgeCommunity,
    shortDescription:
      "Community platform for university students with interactive tools and academic collaboration.",
    fullDescription:
      "Currently developing a community platform for Hybridge University students. The platform supports student interaction, resource sharing, event management, and academic collaboration. Built with modern technologies, including TypeScript for type safety and Framer Motion for smooth, engaging animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://hybridgecommunity.netlify.app/",
    github: "https://github.com/Ariff-dev/HybridgeCommunity",
    date: "November 2025",
    inDevelopment: true,
  },
  {
    id: 4,
    title: "Hybridge Community Backend API",
    image:
      "https://pandorafms.com/blog/wp-content/uploads/2019/02/para-que-sirve-una-API-featured.png",
    shortDescription:
      "RESTful API backend for the community platform using MVC architecture.",
    fullDescription:
      "Developing a robust RESTful API backend to support the Hybridge Community platform. Built using PHP with an MVC architecture for clean, maintainable code. The API handles user authentication and team board management. Key features include secure endpoints, input validation, error handling, and optimized database queries for better performance.",
    technologies: ["PHP", "MySQL", "MVC", "RESTful API"],
    github: "https://github.com/Ariff-dev/HybridgeCommunityBackend",
    date: "November 2025",
    inDevelopment: true,
  },
];

/* ══════════════════════════════════════════════════════════════
   PORTFOLIO SECTION
══════════════════════════════════════════════════════════════ */
export const Portfolio = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const close = () => setSelected(null);

  return (
    <section id="portfolio" className="py-16 md:py-20">
      {/* Section header — igual que Experience y Stack */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--complementary)" }}
        >
          Projects
        </p>
        <h2 className="hero-name text-3xl sm:text-4xl font-bold tracking-tight">
          Portfolio
        </h2>
      </div>

      {/* Group label */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--complementary)" }}
        >
          <FaCode size={11} />
          Featured Projects
        </span>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="portfolio-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            {/* Sticky header */}
            <div className="portfolio-modal__header">
              <div className="flex flex-col gap-1">
                <h3
                  className="text-lg sm:text-xl font-bold leading-snug"
                  style={{ color: "var(--primary)" }}
                >
                  {selected.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {selected.date}
                  </span>
                  {selected.inDevelopment && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "var(--surface-elevated)",
                        border: "1px solid var(--border)",
                        color: "var(--secondary)",
                      }}
                    >
                      In Development
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={close}
                className="portfolio-modal__close"
                aria-label="Close"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Image */}
            <div className="portfolio-modal__img-wrap">
              <img
                src={selected.image}
                alt={selected.title}
                className="portfolio-modal__img"
              />
            </div>

            {/* Content */}
            <div className="portfolio-modal__body">
              <p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                {selected.fullDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--complementary)" }}
                  >
                    Technologies
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(--border) 50%, transparent)`,
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selected.link || selected.github) && (
                <div className="flex flex-col sm:flex-row gap-3">
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-primary flex-1 justify-center"
                      style={{ animation: "none" }}
                    >
                      <FaExternalLinkAlt size={13} />
                      Visit Site
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-secondary flex-1 justify-center"
                    >
                      <FaGithub size={13} />
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
