import { useState } from 'react'
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaTimes,
  FaGithub,
} from 'react-icons/fa'
import type { Project } from './portfolio.interface'
import PrestigeAgency from '../../../assets/portfolio/prestige_agency_p.png'
import Dashboard from '../../../assets/portfolio/dashboard.png'
import HybridgeCommunity from '../../../assets/portfolio/hybridgecommunity.png'

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Project array - Easy to manage and update
  const projects: Project[] = [
    {
      id: 1,
      title: 'Landing Page - Prestige Agency',
      image: PrestigeAgency,
      shortDescription:
        'Professional landing page for an insurance agency with a modern design and smooth user experience',
      fullDescription:
        'Developed a complete landing page for Prestige Agency, an insurance brokerage firm. The project features a modern, responsive layout with smooth animations, intuitive navigation, and optimized performance. Built custom components to highlight services, team members, and client testimonials, resulting in better user engagement and higher conversion rates.',
      technologies: ['React', 'Tailwind CSS', 'HTML5'],
      link: 'https://prestigeagencyyllc.com/',
      date: 'August 2024',
    },
    {
      id: 2,
      title: 'Sales Dashboard',
      image: Dashboard,
      shortDescription:
        'Interactive sales analytics dashboard with real-time data visualization',
      fullDescription:
        'Created a sales dashboard application that delivers real-time analytics and insights for the sales team. Includes interactive charts built with D3.js, customizable filters, performance indicators, and data export options. The dashboard integrates with a PHP backend and MySQL database to ensure accurate, up-to-date sales information that supports data-driven decisions.',
      technologies: ['React', 'D3.js', 'PHP', 'MySQL'],
      link: 'https://prestigeagencyyllc.com/app/',
      date: 'October 2024',
    },
    {
      id: 3,
      title: 'Hybridge Community Platform (Currently in Development)',
      image: HybridgeCommunity,
      shortDescription:
        'Community platform for university students with interactive tools',
      fullDescription:
        'Currently developing a community platform for Hybridge University students. The platform supports student interaction, resource sharing, event management, and academic collaboration. Built with modern technologies, including TypeScript for type safety and Framer Motion for smooth, engaging animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://hybridgecommunity.netlify.app/',
      github: 'https://github.com/Ariff-dev/HybridgeCommunity',
      date: 'November 2025',
    },
    {
      id: 4,
      title: 'Hybridge Community Backend API (Currently in Development)',
      image:
        'https://pandorafms.com/blog/wp-content/uploads/2019/02/para-que-sirve-una-API-featured.png',
      shortDescription:
        'RESTful API backend for the community platform using MVC architecture',
      fullDescription:
        'Developing a robust RESTful API backend to support the Hybridge Community platform. Built using PHP with an MVC architecture for clean, maintainable code. The API handles user authentication and team board management. Key features include secure endpoints, input validation, error handling, and optimized database queries for better performance.',
      technologies: ['PHP', 'MySQL', 'MVC', 'RESTful API'],
      github: 'https://github.com/Ariff-dev/HybridgeCommunityBackend',
      date: 'November 2025',
    },
  ]

  const openModal = (project: Project): void => {
    setSelectedProject(project)
  }

  const closeModal = (): void => {
    setSelectedProject(null)
  }

  const hasValidLinks = (project: Project): boolean => {
    return !!(project.link || project.github)
  }

  return (
    <section id='portfolio' className='py-4'>
      <h2 className='text-[color:var(--primary)] text-2xl sm:text-3xl text-pretty mb-6 font-semibold'>
        Portfolio
      </h2>

      <div className='py-4'>
        <h3 className='text-lg sm:text-xl bg-[color:var(--secondary)] text-pretty text-[color:var(--contrast)] text-center rounded-t-sm py-2 mb-6'>
          <FaBriefcase className='inline mr-2 mb-1' />
          Featured Projects
        </h3>

        {/* Project Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='border-2 border-[color:var(--tertiary)] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300'
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                />
              </div>

              {/* Content */}
              <div className='p-4 bg-[color:var(--contrast)]'>
                <h4 className='text-lg sm:text-xl font-semibold text-[color:var(--primary)] mb-2'>
                  {project.title}
                </h4>
                <p className='text-sm sm:text-base text-[color:var(--secondary)] mb-3'>
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-3 py-1 rounded-full text-xs'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-3 text-[color:var(--complementary)] text-sm flex items-center gap-1'>
                  <FaExternalLinkAlt className='text-xs' />
                  <span>Click to view details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
          onClick={closeModal}
        >
          <div
            className='bg-[color:var(--contrast)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='sticky top-0 bg-[color:var(--primary)] p-4 flex justify-between items-center'>
              <h3 className='text-xl sm:text-2xl font-semibold text-[color:var(--secondary)]'>
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                className='text-[color:var(--secondary)] hover:text-[color:var(--complementary)] transition-colors'
                aria-label='Close modal'
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Project Image in Modal */}
            <div className='relative h-64 overflow-hidden'>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Modal Content */}
            <div className='p-6'>
              <div className='mb-4'>
                <span className='text-sm text-[color:var(--complementary)] font-semibold'>
                  {selectedProject.date}
                </span>
              </div>

              <p className='text-[color:var(--secondary)] text-base leading-relaxed mb-6'>
                {selectedProject.fullDescription}
              </p>

              {/* Technologies */}
              <div className='mb-6'>
                <h4 className='text-[color:var(--primary)] font-semibold mb-3'>
                  Technologies Used
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-[color:var(--tertiary)] text-[color:var(--contrast)] px-4 py-2 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links - Only show if there are valid links */}
              {hasValidLinks(selectedProject) && (
                <div className='flex flex-col sm:flex-row gap-3'>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 bg-[color:var(--primary)] text-[color:var(--secondary)] py-3 px-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2'
                    >
                      <FaExternalLinkAlt />
                      Visit Site
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 bg-[color:var(--complementary)] text-[color:var(--contrast)] py-3 px-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2'
                    >
                      <FaGithub />
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
  )
}

export default Portfolio
