import { About } from './about/About'
import { Contact } from './contact/Contact'
import { Experience } from './experience/Experience'
import { Hero } from './hero/Hero'
import Portfolio from './portfolio/Portfolio'
import { Stack } from './stack/Stack'

export const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  )
}
