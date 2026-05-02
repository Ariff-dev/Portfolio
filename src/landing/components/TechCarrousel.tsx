import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaReact,
  FaAngular,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiFastify,
  SiFlask,
  SiMongodb,
} from "react-icons/si";
import type { TechCategory, Tech } from "../interfaces";

const ICON_SIZE = 20;

const COLOR: Record<TechCategory, string> = {
  frontend: "var(--primary)",
  backend: "var(--secondary)",
  database: "var(--complementary)",
};

const technologies: Tech[] = [
  {
    name: "HTML",
    icon: <FaHtml5 size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "Angular",
    icon: <FaAngular size={ICON_SIZE} color={COLOR.frontend} />,
    category: "frontend",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "Python",
    icon: <FaPython size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "PHP",
    icon: <FaPhp size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "Fastify",
    icon: <SiFastify size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "Flask",
    icon: <SiFlask size={ICON_SIZE} color={COLOR.backend} />,
    category: "backend",
  },
  {
    name: "SQL",
    icon: <FaDatabase size={ICON_SIZE} color={COLOR.database} />,
    category: "database",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={ICON_SIZE} color={COLOR.database} />,
    category: "database",
  },
];

export const TechCarousel = () => {
  return (
    <div className="tech-grid-wrapper">
      <div className="tech-grid-inner">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="tech-card"
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-3px)";
              el.style.backgroundColor = "var(--surface-elevated)";
              el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.backgroundColor = "var(--surface)";
              el.style.boxShadow = "none";
            }}
          >
            {tech.icon}
            <span className="tech-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
