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

const ICON_SIZE = 28;

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

const TechGrid = () => {
  return (
    <div className="w-full">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(82px, 1fr))",
          gap: "12px",
        }}
      >
        {technologies.map((tech) => (
          <div
            key={tech.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 8px",
              borderRadius: "10px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              cursor: "default",
              transition:
                "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
            }}
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
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;
