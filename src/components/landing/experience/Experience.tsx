import { FaBriefcase, FaGraduationCap, FaBuilding } from "react-icons/fa";
import type { ExpItem, EduItem } from "../interfaces";
import { DateBadge, Tag } from "../components";

const WORK: ExpItem[] = [
  {
    id: "maestros",
    title: "Junior Web Developer",
    company: "Maestros del Media",
    period: "Apr 2019 – Sep 2019",
    bullets: [
      {
        text: "Collaborated directly with clients to define project requirements, ensuring alignment with their business goals.",
      },
      {
        text: "Developed, deployed, and maintained responsive web applications for a diverse client base.",
      },
      {
        text: "Provided ongoing technical support, including troubleshooting, bug fixes, and feature updates post-launch.",
      },
    ],
    tags: ["PHP", "WordPress", "Hosting Services", "Web Development"],
  },
  {
    id: "enlace",
    title: "Software Developer",
    company: "Enlace Hipotecario Afimex",
    period: "Mar 2024 – Present",
    current: true,
    description:
      "Evolved from a technical support role to a software developer and analyst position, contributing to the core technology of a dynamic financial brokerage. Our platform serves as the primary link between clients seeking credit solutions and major financial institutions.",
    bullets: [
      {
        strong: "Financial Product Analysis & Maintenance:",
        text: "Serve as the lead analyst for the platform's simulator, translating complex calculation rules from a wide range of bank loan products into system logic.",
      },
      {
        strong: "Digital Application Development:",
        text: "Develop and optimize intelligent digital forms that streamline data collection and automate credit application generation with 100% compliance.",
      },
      {
        strong: "Expert Platform Support:",
        text: "Act as SME for the internal platform, providing advanced technical support to financial advisors.",
      },
      {
        strong: "Technical Problem Solving:",
        text: "Proactively identify and resolve bugs, ensuring platform stability and optimal performance.",
      },
    ],
    tags: [
      "Software Infrastructure",
      "Technical Support",
      "Software Development",
    ],
  },
];

const EDUCATION: EduItem[] = [
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "Hybridge Education",
    period: "Oct 2023 – Oct 2026",
    description:
      "Final-year Software Engineering student specializing in cloud architecture and mobile application development. Proficient in Python, Java, and SQL, with hands-on experience in agile methodologies.",
  },
];

/* ══════════════════════════════════════════════════════════════
   EXPERIENCE SECTION
══════════════════════════════════════════════════════════════ */
export const Experience = () => {
  return (
    <section id="exp" className="py-16 md:py-20">
      {/* Section header — igual que el label "Tech Stack" del hero */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--complementary)" }}
        >
          Career
        </p>
        <h2
          className="hero-name text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ animationDelay: "0ms" }}
        >
          Experience & Education
        </h2>
      </div>

      {/* ── Work Experience ── */}
      <div className="mb-12">
        {/* Group label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--complementary)" }}
          >
            <FaBriefcase size={11} />
            Work Experience
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {WORK.map((item, idx) => (
            <div key={item.id} className="exp-item">
              {/* Left: dot + line */}
              <div className="exp-item__left">
                <div
                  className="exp-item__dot"
                  style={
                    item.current
                      ? {
                          backgroundColor: "var(--complementary)",
                          boxShadow: "0 0 10px rgba(82,121,111,0.5)",
                          borderColor: "var(--complementary)",
                        }
                      : {}
                  }
                />
                {idx < WORK.length - 1 && <div className="exp-item__line" />}
              </div>

              {/* Card */}
              <div
                className="exp-card"
                style={{ marginBottom: idx < WORK.length - 1 ? "20px" : "0" }}
              >
                {/* Card header */}
                <div className="exp-card__header">
                  <div className="flex flex-col gap-1">
                    <h4
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      {item.title}
                    </h4>
                    <span
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <FaBuilding size={11} />
                      {item.company}
                    </span>
                  </div>
                  <DateBadge period={item.period} current={item.current} />
                </div>

                {/* Card body */}
                <div className="exp-card__body">
                  {item.description && (
                    <p
                      className="text-sm sm:text-base leading-relaxed mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.description}
                    </p>
                  )}

                  {item.bullets && (
                    <ul className="space-y-2.5 mb-4">
                      {item.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm sm:text-base leading-relaxed"
                        >
                          <span
                            className="mt-0.5 flex-shrink-0"
                            style={{
                              color: "var(--complementary)",
                              fontSize: "10px",
                            }}
                          >
                            ◆
                          </span>
                          <span style={{ color: "var(--text-muted)" }}>
                            {b.strong && (
                              <strong
                                className="font-semibold"
                                style={{ color: "var(--primary)" }}
                              >
                                {b.strong}{" "}
                              </strong>
                            )}
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div>
        {/* Group label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--complementary)" }}
          >
            <FaGraduationCap size={12} />
            Education
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Education cards */}
        <div className="exp-timeline">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-item__left">
                <div className="exp-item__dot" />
              </div>
              <div className="exp-card">
                <div className="exp-card__header">
                  <div className="flex flex-col gap-1">
                    <h4
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      {edu.title}
                    </h4>
                    <span
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <FaBuilding size={11} />
                      {edu.institution}
                    </span>
                  </div>
                  <DateBadge period={edu.period} />
                </div>
                <div className="exp-card__body">
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
