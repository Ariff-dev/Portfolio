import Photo from '../../../assets/me.png'
import TechCarousel from './TechCarrousel'

export const Hero = () => {
  return (
    <section
      id='hero'
      className='flex items-center flex-col min-h-screen justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 gap-6 sm:gap-8'
    >
      <div className='flex justify-center items-center flex-col gap-4 sm:gap-6 max-w-4xl w-full'>
        <img
          className='rounded-2xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover bg-[var(--primary)] p-1 shadow-lg'
          src={Photo}
          alt='Ariff Martinez, Software Developer & Analyst'
        />

        <div className='text-center space-y-2 sm:space-y-3'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)]'>
            Ariff Martinez
          </h1>

          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--secondary)] font-medium'>
            Software Developer & Analyst
            <span className='block text-[var(--primary)] mt-1'>
              Financial Technology
            </span>
          </p>
        </div>

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--secondary)] text-center leading-relaxed max-w-2xl'>
          As a Developer and Analyst at the heart of the FinTech industry, my
          role is to be the bridge between business strategy and technical
          execution. I specialize in backend development, transforming the
          complex logic of mortgage and automotive credit products into the
          simulators and applications that drive the business.
        </p>
      </div>

      <div className='w-full max-w-4xl'>
        <TechCarousel />
      </div>
    </section>
  )
}
