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
      // Mostrar navbar después de 100px de scroll
      setIsVisible(window.scrollY > 100)

      // Detectar sección activa
      const sections = appcontent.map((item) => item.tag.substring(1))
      let current = ''

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si la sección está en el viewport (con margen superior)
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
    handleScroll() // Ejecutar al montar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 text-sm md:px-4  left-1/2 transform -translate-x-1/2 py-3 bg-[var(--primary)] rounded-xl shadow-lg transition-all duration-300 z-50 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className='flex items-center gap-1'>
        {appcontent.map(({ tag, name }, idx) => (
          <div key={idx} className='flex items-center'>
            <a
              href={tag}
              className={`text-[var(--secondary)] font-medium hover:opacity-80 transition-opacity px-2 py-1 rounded ${
                activeSection === tag
                  ? 'bg-[var(--secondary)] bg-opacity-20 font-bold'
                  : ''
              }`}
            >
              {name}
            </a>
            {idx < appcontent.length - 1 && (
              <span className='mx-1 text-[var(--secondary)] opacity-50'>
                {'>'}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
