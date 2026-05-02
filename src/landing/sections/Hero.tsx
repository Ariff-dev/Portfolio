import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Photo from "../../assets/me.png";
import { useTypewriter, useExperience } from "../../hooks";
import { StatCard, TechCarousel } from "../components";

const ROLES = ["Backend Developer", "Business Analyst", "FinTech Specialist"];

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
export const Hero = () => {
  const role = useTypewriter(ROLES);
  const { label: expLabel } = useExperience();

  return (
    <section
      id="hero"
      className="flex items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-16"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 md:gap-8 lg:gap-12 gap-10">
        {/* ─── COLUMNA IZQUIERDA (col-span-2) ─── */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start gap-5">
          {/* Foto con borde gradiente animado */}
          <div className="hero-photo-frame hero-animate">
            <img
              className="rounded-2xl w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover block"
              src={Photo}
              alt="Ariff Martinez, Software Developer & Analyst"
            />
          </div>

          {/* Bloque de texto */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left w-full">
            {/* Nombre */}
            <h1
              className="hero-name text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight hero-animate"
              style={{ animationDelay: "80ms" }}
            >
              Ariff Martinez
            </h1>

            {/* Typewriter */}
            <p
              className="text-lg sm:text-xl font-medium hero-animate"
              style={{
                color: "var(--secondary)",
                minHeight: "1.8rem",
                animationDelay: "160ms",
              }}
              aria-label="Software Developer, Business Analyst & FinTech Specialist"
            >
              {role}
              <span className="typewriter-cursor" aria-hidden="true">
                |
              </span>
            </p>

            {/* Ubicación + badge FinTech */}
            <div
              className="flex flex-wrap items-center gap-2 justify-center md:justify-start hero-animate"
              style={{ animationDelay: "220ms" }}
            >
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaMapMarkerAlt size={12} color="var(--complementary)" />
                CDMX, México
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--border)",
                  display: "inline-block",
                }}
              />
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: "var(--complementary)",
                  color: "var(--background)",
                }}
              >
                FinTech
              </span>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-3 justify-center md:justify-start flex-wrap hero-animate"
              style={{ animationDelay: "300ms" }}
            >
              <StatCard value={expLabel} label="Experience" />
              <StatCard value="2+" label="Projects" />
              <StatCard value="Backend" label="Focus" />
            </div>

            {/* Divisor */}
            <div
              className="w-16 h-px hero-animate"
              style={{
                backgroundColor: "var(--complementary)",
                animationDelay: "360ms",
              }}
            />

            {/* Bio */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-lg hero-animate"
              style={{
                color: "var(--text-muted)",
                animationDelay: "400ms",
              }}
            >
              As a Developer and Analyst at the heart of the FinTech industry,
              my role is to bridge business strategy and technical execution. I
              specialize in backend development, transforming the complex logic
              of mortgage and automotive credit products into simulators and
              applications that drive the business.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start hero-animate"
              style={{ animationDelay: "460ms" }}
            >
              <a href="/cv.pdf" download className="hero-btn-primary">
                <FaFileAlt size={14} />
                Download CV
              </a>
              <a href="#contact" className="hero-btn-secondary">
                Contact me
              </a>
            </div>
          </div>
        </div>

        {/* ─── COLUMNA DERECHA (col-span-1): Tech Stack + Socials ─── */}
        <div
          className="md:col-span-1 flex flex-col gap-3 hero-animate"
          style={{ animationDelay: "200ms" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest text-center"
            style={{ color: "var(--complementary)" }}
          >
            Tech Stack
          </p>

          {/* Grid de tecnologías */}
          <div className="flex-1 min-h-0">
            <TechCarousel />
          </div>

          {/* Social links — full width debajo del grid */}
          <div className="flex flex-col gap-2 w-full pt-1">
            <a
              href="https://github.com/Ariff-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-full"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ariff-martinez"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-full"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="/cv.pdf"
              download
              className="social-link-full social-link-primary"
            >
              <FaFileAlt size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
