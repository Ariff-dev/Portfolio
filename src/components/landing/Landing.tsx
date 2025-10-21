import { About } from './about/About'
import { Experience } from './experience/Experience'
import { Hero } from './hero/Hero'
import { Stack } from './stack/Stack'

export const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Experience />
    </>
  )
}
