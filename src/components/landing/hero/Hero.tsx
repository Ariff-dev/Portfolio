import Photo from '../../../assets/me.png'
import TechCarousel from './TechCarrousel'


export const Hero = () => {
  return (
    <section id='hero' className='flex items-center flex-col min-h-screen  justify-center-safe gap-6'>
      <div className='flex justify-center items-center flex-col gap-2'>
          <img className='rounded-2xl w-1/2 bg-(--primary) p-1' src={Photo} alt='Ariff Martinez Photho' />
          <h1 className='text-2xl '>Ariff Martinez</h1>
          <p className='text-prtimary text-(--secondary) text-lg text-center'>Software Developer & Analyst<span className='block text-(--primary)'>Financial Technology</span></p>
          <p className=''>As a Developer and Analyst at the heart of the FinTech industry, my role is to be the bridge between business strategy and technical execution. I specialize in backend development, transforming the complex logic of mortgage and automotive credit products into the simulators and applications that drive the business.</p>
      </div>
      <TechCarousel />
    </section>
  )
}
