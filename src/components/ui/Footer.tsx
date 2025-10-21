import { FaLinkedin, FaGithub, FaHeart, FaCode } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/tu-perfil',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/tu-usuario',
      color: 'hover:text-gray-800'
    }
  ];

  const quickLinks = [
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className='bg-[color:var(--secondary)] text-[color:var(--contrast)] mt-auto'>
      {/* Main Footer Content */}
      <div className='border-t-4 border-[color:var(--primary)] py-8 px-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          
          {/* About Section */}
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-[color:var(--primary)] mb-4'>
              About Me
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-[color:var(--contrast)] leading-relaxed'>
              Software Developer passionate about creating efficient solutions. Specializing in full-stack development and financial technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-[color:var(--primary)] mb-4'>
              Quick Links
            </h3>
            <nav className='flex flex-col gap-2'>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-sm sm:text-base md:text-lg text-[color:var(--contrast)] hover:text-[color:var(--primary)] transition-colors duration-300 w-fit'
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-[color:var(--primary)] mb-4'>
              Connect
            </h3>
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-[color:var(--contrast)] ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className='text-2xl sm:text-3xl md:text-4xl' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-[color:var(--complementary)] py-4 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2'>
          <p className='text-xs sm:text-sm md:text-base text-[color:var(--contrast)] flex items-center gap-2'>
            © {currentYear} | Made with{' '}
            <FaHeart className='text-red-500 text-xs sm:text-sm' /> and{' '}
            <FaCode className='text-[color:var(--primary)] text-xs sm:text-sm' />
          </p>
          <p className='text-[10px] sm:text-xs md:text-sm text-[color:var(--tertiary)]'>
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
