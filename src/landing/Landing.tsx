import Portfolio from "./portfolio/Portfolio";
import { About, Experience, Hero, Stack } from "./sections";

export const Landing = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Stack />
      <Portfolio />
      <About />
    </>
  );
};
