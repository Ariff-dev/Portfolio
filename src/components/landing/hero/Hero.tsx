import Photo from '../../../assets/me.png'


export const Hero = () => {
  return (
    <section>
      <div className='flex justify-center items-center flex-col'>
          <img className='rounded-2xl w-1/2 bg-(--primary) p-1' src={Photo} alt='Ariff Martinez Photho' />
          <span className='text-lg '>Ariff Martinez</span>
          <p className='text-prtimary text-(--secondary)'>FinTech Software Developer - Backend and Data</p>
      </div>
    </section>
  )
}
