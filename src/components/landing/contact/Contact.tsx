import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ariff-martinez/',
      color: 'text-blue-600',
      hoverColor: 'hover:bg-blue-600',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Ariff-dev',
      color: 'text-gray-800',
      hoverColor: 'hover:bg-gray-800',
      description: 'Check out my projects'
    }
  ];

  return (
    <section id='contact' className='min-h-screen py-4 flex flex-col justify-center'>
      <h2 className='text-[color:var(--primary)] text-2xl text-pretty mb-6'>Contact</h2>
      
      <div className='flex flex-col items-center'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h3 className='text-3xl font-semibold text-[color:var(--secondary)] mb-3'>
            Let's Connect
          </h3>
          <p className='text-[color:var(--complementary)] text-lg max-w-2xl'>
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>

        {/* Social Links */}
        <div className='w-full max-w-3xl'>
          <div className='bg-[color:var(--secondary)] text-[color:var(--contrast)] text-center py-3 rounded-t-sm'>
            <h4 className='text-lg font-medium'>Find Me On</h4>
          </div>
          
          <div className='border-2 border-[color:var(--tertiary)] rounded-b-sm bg-[color:var(--contrast)] p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex flex-col items-center justify-center p-6 border-2 border-[color:var(--tertiary)] rounded-lg transition-all duration-300 ${social.hoverColor} hover:text-white group`}
                >
                  <social.icon className={`text-6xl ${social.color} group-hover:text-white transition-colors duration-300 mb-4`} />
                  <h5 className='text-xl font-semibold text-[color:var(--secondary)] group-hover:text-white transition-colors duration-300 mb-2'>
                    {social.name}
                  </h5>
                  <p className='text-sm text-[color:var(--complementary)] group-hover:text-white transition-colors duration-300'>
                    {social.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className='mt-8 w-full max-w-3xl'>
          <div className='bg-[color:var(--primary)] rounded-lg p-6 text-center'>
            <FaEnvelope className='text-4xl text-[color:var(--secondary)] mx-auto mb-3' />
            <h4 className='text-xl font-semibold text-[color:var(--secondary)] mb-2'>
              Email Me
            </h4>
            <a 
              href='mailto:ariff.dev24@gmail.com'
              className='text-lg text-[color:var(--secondary)] hover:text-[color:var(--complementary)] transition-colors duration-300 underline'
            >
              ariff.dev24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}