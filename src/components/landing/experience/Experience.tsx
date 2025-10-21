import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export const Experience = () => {
  return (
    <section id='exp' className='py-4'>
      <h2 className='text-[color:var(--primary)] text-2xl sm:text-3xl text-pretty mb-6 font-semibold'>
        Experience
      </h2>

      {/* Work Experience Section */}
      <div className='py-4 flex flex-col'>
        <h3 className='text-lg sm:text-xl bg-[color:var(--secondary)] text-pretty text-[color:var(--contrast)] text-center rounded-t-sm py-2'>
          <FaBriefcase className='inline mr-2 mb-1' />
          Work Experience
        </h3>

        {/* Software Developer - Current */}
        <div className='border-2 border-[color:var(--tertiary)] mb-4'>
          <div className='bg-[color:var(--primary)] p-3'>
            <h4 className='text-lg sm:text-xl font-semibold text-[color:var(--secondary)]'>
              Software Developer
            </h4>
            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm sm:text-base text-[color:var(--secondary)] mt-1'>
              <span className='flex items-center gap-1'>
                <FaMapMarkerAlt className='text-xs' />
                Enlace Hipotecario Afimex
              </span>
              <span className='flex items-center gap-1 mt-1 sm:mt-0'>
                <FaCalendarAlt className='text-xs' />
                Mar 2024 - Present (1 yr 8 mos)
              </span>
            </div>
          </div>

          <div className='p-4 bg-[color:var(--contrast)]'>
            <p className='text-pretty text-sm sm:text-base leading-relaxed mb-3 text-[color:var(--secondary)]'>
              Evolved from a technical support role to a software developer and
              analyst position, contributing to the core technology of a dynamic
              financial brokerage. Our platform serves as the primary link
              between clients seeking credit solutions and major financial
              institutions.
            </p>

            <ul className='space-y-2 text-[color:var(--secondary)] text-sm sm:text-base leading-relaxed'>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <div>
                  <strong className='text-[color:var(--complementary)]'>
                    Financial Product Analysis & Maintenance:
                  </strong>{' '}
                  Serve as the lead analyst for the platform's simulator,
                  translating complex calculation rules from a wide range of
                  bank loan products into system logic.
                </div>
              </li>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <div>
                  <strong className='text-[color:var(--complementary)]'>
                    Digital Application Development:
                  </strong>{' '}
                  Develop and optimize intelligent digital forms that streamline
                  data collection and automate credit application generation
                  with 100% compliance.
                </div>
              </li>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <div>
                  <strong className='text-[color:var(--complementary)]'>
                    Expert Platform Support:
                  </strong>{' '}
                  Act as SME for the internal platform, providing advanced
                  technical support to financial advisors.
                </div>
              </li>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <div>
                  <strong className='text-[color:var(--complementary)]'>
                    Technical Problem Solving:
                  </strong>{' '}
                  Proactively identify and resolve bugs, ensuring platform
                  stability and optimal performance.
                </div>
              </li>
            </ul>

            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                Software Infrastructure
              </span>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                Technical Support
              </span>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                Software Development
              </span>
            </div>
          </div>
        </div>

        {/* Junior Web Developer */}
        <div className='border-2 border-[color:var(--tertiary)]'>
          <div className='bg-[color:var(--complementary)] p-3'>
            <h4 className='text-lg sm:text-xl font-semibold text-[color:var(--contrast)]'>
              Junior Web Developer
            </h4>
            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm sm:text-base text-[color:var(--contrast)] mt-1'>
              <span className='flex items-center gap-1'>
                <FaMapMarkerAlt className='text-xs' />
                Maestros del Media
              </span>
              <span className='flex items-center gap-1 mt-1 sm:mt-0'>
                <FaCalendarAlt className='text-xs' />
                Apr 2019 - Sep 2019 (6 mos)
              </span>
            </div>
          </div>

          <div className='p-4 bg-[color:var(--contrast)]'>
            <ul className='space-y-2 text-[color:var(--secondary)] text-sm sm:text-base leading-relaxed'>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <span>
                  Collaborated directly with clients to define project
                  requirements, ensuring alignment with their business goals.
                </span>
              </li>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <span>
                  Developed, deployed, and maintained responsive web
                  applications for a diverse client base.
                </span>
              </li>
              <li className='flex gap-2'>
                <span className='text-[color:var(--primary)] font-bold'>•</span>
                <span>
                  Provided ongoing technical support, including troubleshooting,
                  bug fixes, and feature updates post-launch.
                </span>
              </li>
            </ul>

            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                PHP
              </span>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                WordPress
              </span>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                Hosting Services
              </span>
              <span className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs sm:text-sm'>
                Web Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className='py-4 flex flex-col mt-6'>
        <h3 className='text-lg sm:text-xl bg-[color:var(--secondary)] text-pretty text-[color:var(--contrast)] text-center rounded-t-sm py-2'>
          <FaGraduationCap className='inline mr-2 mb-1' />
          Education
        </h3>

        <div className='border-2 border-[color:var(--tertiary)]'>
          <div className='bg-[color:var(--primary)] p-3'>
            <h4 className='text-lg sm:text-xl font-semibold text-[color:var(--secondary)]'>
              Bachelor of Science in Software Engineering
            </h4>
            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm sm:text-base text-[color:var(--secondary)] mt-1'>
              <span className='flex items-center gap-1'>
                <FaMapMarkerAlt className='text-xs' />
                Hybridge Education
              </span>
              <span className='flex items-center gap-1 mt-1 sm:mt-0'>
                <FaCalendarAlt className='text-xs' />
                Oct 2023 - Oct 2026
              </span>
            </div>
          </div>

          <div className='p-4 bg-[color:var(--contrast)]'>
            <p className='text-pretty text-sm sm:text-base leading-relaxed text-[color:var(--secondary)]'>
              Final-year Software Engineering student specializing in cloud
              architecture and mobile application development. Proficient in
              Python, Java, and SQL, with hands-on experience in agile
              methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
