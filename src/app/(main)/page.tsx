"use client";

import AboutSection from "./partials/AboutSection";
import ContactSection from "./partials/ContactSection";
import HomeSection from "./partials/HomeSection";
import ProjectSection from "./partials/ProjectSection";
import SkillSection from "./partials/SkillSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
