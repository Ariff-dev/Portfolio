import { useState, useEffect } from 'react'

interface AppContentNav {
  name: string
  tag: string
}

const appcontent: AppContentNav[] = [
  { name: 'Hero', tag: '#hero' },
  { name: 'About', tag: '#about' },
  { name: 'Stack', tag: '#stack' },
  { name: 'Experience', tag: '#exp' },
  { name: 'Portfolio', tag: '#portfolio' },
  { name: 'Contact', tag: '#contact' },
]

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after 100px scroll
      setIsVisible(window.scrollY > 100)

      // Detect active section
      const sections = appcontent.map((item) => item.tag.substring(1))
      let current = ''

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${sectionId}`
            break
          }
        }
      }

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-2 md:top-0 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-3 bg-[var(--primary)] rounded-xl shadow-lg transition-all duration-300 z-50 w-[95vw] md:w-auto max-w-[900px] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      {/* flex-wrap so items go to a second line on small screens */}
      <div className='flex flex-wrap justify-center items-center gap-1'>
        {appcontent.map(({ tag, name }, idx) => (
          <div key={idx} className='flex items-center'>
            <a
              href={tag}
              className={`text-[var(--secondary)] font-medium hover:opacity-80 transition-opacity px-2 py-1 rounded text-center ${
                activeSection === tag
                  ? 'bg-[var(--secondary)] bg-opacity-20 font-bold'
                  : ''
              }`}
            >
              {name}
            </a>

            {/* hide separators on small screens so they don't force extra width */}
            {idx < appcontent.length - 1 && (
              <span className='mx-1 text-[var(--secondary)] opacity-50 hidden md:inline-block'>
                {'>'}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
