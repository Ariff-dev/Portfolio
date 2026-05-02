export const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 gap-6 sm:gap-8 max-w-4xl mx-auto text-center'
    >
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)]'>
        Hello There!
      </h2>

      <div className='space-y-4 sm:space-y-6 text-[var(--secondary)]'>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
          Hi there! I’m a product-focused Software Developer and a final-year
          Software Engineering student passionate about building technology that
          solves real problems. My journey into tech began at 15, when I learned
          Java to build a Minecraft server for my friends — an experience that
          sparked my curiosity for purposeful, hands-on problem-solving.
        </p>

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
          Over the years, I’ve developed a strong foundation in software
          architecture, databases, and cloud computing through my studies at
          Hybridge University. I started out in front-end development with React
          and Angular, and later expanded into back-end and data engineering,
          where I found my real passion.
        </p>

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
          Today, I work as a Software Developer & Analyst in the FinTech sector,
          focusing on PHP-based back-end development, process automation, and
          data-driven tools that enhance business efficiency. Outside of work, I
          love experimenting with new technologies, contributing to personal
          projects, and connecting with others who share a passion for building
          meaningful software.
        </p>
      </div>
    </section>
  )
}
