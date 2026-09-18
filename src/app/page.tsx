import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { EngineeringMindset } from "@/components/engineering-mindset/engineering-mindset";
import { SelectedSystems } from "@/components/systems/selected-systems";
import { Education } from "@/components/education/education";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <EngineeringMindset />
      <SelectedSystems />
      <Education />
      <Contact />
    </>
  );
}
