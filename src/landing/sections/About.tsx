import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">

      {/* Section header — mismo patrón que Experience y Stack */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--complementary)" }}
        >
          About
        </p>
        <h2 className="hero-name text-3xl sm:text-4xl font-bold tracking-tight">
          Hello There!
        </h2>
      </div>

      {/* Content: Bio + Contact card */}
      <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-12">

        {/* ── Bio (col-span-3) ── */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I'm a product-focused Software Developer and final-year Software
            Engineering student passionate about building technology that solves
            real problems. My journey into tech began at 15, when I learned Java
            to build a Minecraft server for friends — an experience that sparked
            my curiosity for purposeful, hands-on problem-solving.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Today I work as a Developer & Analyst in the FinTech sector,
            focusing on PHP-based back-end development, process automation, and
            data-driven tools that enhance business efficiency. I've grown from
            front-end React & Angular into back-end and data engineering —
            where I found my real passion. Outside of work I love experimenting
            with new technologies and contributing to personal projects.
          </p>

          {/* Divider */}
          <div
            className="w-16 h-px"
            style={{ backgroundColor: "var(--complementary)" }}
          />

          {/* Quote / tagline */}
          <p
            className="text-sm italic"
            style={{ color: "var(--text-muted)", opacity: 0.75 }}
          >
            "I bridge business strategy and technical execution — one feature at a time."
          </p>
        </div>

        {/* ── Contact card (col-span-2) ── */}
        <div className="md:col-span-2">
          <div className="about-contact-card">
            {/* Card label */}
            <div className="about-contact-card__header">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--complementary)" }}
              >
                Let's Connect
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                Always open to new projects, ideas, and collaborations.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 p-4">
              <a
                href="https://github.com/Ariff-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-full"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ariff-martinez"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ariff.dev24@gmail.com"
                className="social-link-full social-link-primary"
                aria-label="Email"
              >
                <FaEnvelope size={14} />
                <span>ariff.dev24@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
