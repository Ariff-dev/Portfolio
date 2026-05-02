import {
  FaReact,
  FaAngular,
  FaPython,
  FaPhp,
  FaDatabase,
  FaUbuntu,
  FaBug,
  FaCode,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiNginx,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { LevelBadge, StackItemPill } from "../components";
import type { StackGroup } from "../interfaces";
import { STACK_LEVEL_CONFIG } from "../config/stackLevelconfig";

const ICON_SIZE = 16;
const C = {
  primary: "var(--primary)",
  mid: "var(--secondary)",
  learning: "var(--text-muted)",
};

const STACKS: StackGroup[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web",
    subtitle: "Full-Stack Web Development",
    icon: <FaLayerGroup size={14} />,
    level: "primary",
    levelLabel: "Primary Stack",
    categories: [
      {
        label: "Frontend",
        items: [
          {
            name: "React",
            icon: <FaReact size={ICON_SIZE} color={C.primary} />,
          },
          {
            name: "Angular",
            icon: <FaAngular size={ICON_SIZE} color={C.primary} />,
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss size={ICON_SIZE} color={C.primary} />,
          },
        ],
      },
      {
        label: "Backend",
        items: [
          {
            name: "Flask",
            icon: <SiFlask size={ICON_SIZE} color={C.primary} />,
            context: "Python",
          },
          { name: "PHP", icon: <FaPhp size={ICON_SIZE} color={C.primary} /> },
          {
            name: "RESTful APIs",
            icon: <MdApi size={ICON_SIZE} color={C.primary} />,
          },
        ],
      },
      {
        label: "Databases",
        items: [
          {
            name: "PostgreSQL",
            icon: <SiPostgresql size={ICON_SIZE} color={C.primary} />,
          },
          {
            name: "MySQL",
            icon: <SiMysql size={ICON_SIZE} color={C.primary} />,
          },
        ],
      },
    ],
  },
  {
    id: "fintech",
    title: "Backend & FinTech",
    subtitle: "Back-end & Data Processing",
    icon: <FaServer size={14} />,
    level: "mid",
    levelLabel: "Mid-Level Stack",
    categories: [
      {
        label: "Languages",
        items: [
          { name: "PHP", icon: <FaPhp size={ICON_SIZE} color={C.mid} /> },
          { name: "Python", icon: <FaPython size={ICON_SIZE} color={C.mid} /> },
        ],
      },
      {
        label: "Databases",
        items: [
          {
            name: "PostgreSQL",
            icon: <SiPostgresql size={ICON_SIZE} color={C.mid} />,
          },
          { name: "MySQL", icon: <SiMysql size={ICON_SIZE} color={C.mid} /> },
          { name: "SQL", icon: <FaDatabase size={ICON_SIZE} color={C.mid} /> },
        ],
      },
      {
        label: "Tools",
        items: [
          {
            name: "RESTful APIs",
            icon: <MdApi size={ICON_SIZE} color={C.mid} />,
          },
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "Cloud / DevOps",
    subtitle: "Cloud & Infrastructure",
    icon: <FaCode size={14} />,
    level: "learning",
    levelLabel: "Exploring",
    categories: [
      {
        label: "Infrastructure",
        items: [
          {
            name: "Nginx",
            icon: <SiNginx size={ICON_SIZE} color={C.learning} />,
          },
          {
            name: "Ubuntu",
            icon: <FaUbuntu size={ICON_SIZE} color={C.learning} />,
          },
        ],
      },
      {
        label: "Tools",
        items: [
          {
            name: "Debugging",
            icon: <FaBug size={ICON_SIZE} color={C.learning} />,
          },
        ],
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   STACK SECTION
══════════════════════════════════════════════════════════════ */
export const Stack = () => {
  return (
    <section id="stack" className="py-16 md:py-20">
      {/* Section header — igual que Experience */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--complementary)" }}
        >
          Technical
        </p>
        <h2 className="hero-name text-3xl sm:text-4xl font-bold tracking-tight">
          Tech Stack
        </h2>
      </div>

      {/* Stack groups grid */}
      <div className="stack-grid">
        {STACKS.map((group) => {
          const cfg = STACK_LEVEL_CONFIG[group.level];
          return (
            <div key={group.id} className="stack-card">
              {/* Card header */}
              <div
                className="stack-card__header"
                style={{
                  borderBottom: `1px solid color-mix(in srgb, var(--border) 60%, transparent)`,
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span style={{ color: cfg.dot }}>{group.icon}</span>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {group.subtitle}
                  </p>
                </div>
                <LevelBadge level={group.level} label={group.levelLabel} />
              </div>

              {/* Categories */}
              <div className="stack-card__body">
                {group.categories.map((cat) => (
                  <div key={cat.label} className="stack-category">
                    {/* Category label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--complementary)" }}
                      >
                        {cat.label}
                      </span>
                      <div
                        className="flex-1 h-px"
                        style={{
                          backgroundColor: `color-mix(in srgb, var(--border) 50%, transparent)`,
                        }}
                      />
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <StackItemPill
                          key={item.name}
                          item={item}
                          level={group.level}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
