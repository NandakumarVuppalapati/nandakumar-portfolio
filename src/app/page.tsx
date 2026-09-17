import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { EngineeringMindset } from "@/components/engineering-mindset/engineering-mindset";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <EngineeringMindset />
      <Contact />
    </>
  );
}
