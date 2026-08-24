import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { sectionMessages } from "@/lib/portfolio-data";
import { Decor } from "@/components/portfolio/Decor";
import { Navbar } from "@/components/portfolio/Navbar";
import { PageMessage } from "@/components/portfolio/PageMessage";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xynex Kim — IT Student & Aspiring Developer" },
      {
        name: "description",
        content:
          "The playful pink portfolio of Xynex Kim — an IT student building soft, creative things on the web while learning one project at a time.",
      },
      { property: "og:title", content: "Xynex Kim — IT Student & Aspiring Developer" },
      {
        property: "og:description",
        content:
          "Explore Xynex Kim's projects, growing skills, and little experiments — a soft pink corner of the internet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [section, setSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Decor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <PageMessage
        key={section}
        message={
          sectionMessages[section] ??
          "Hi! Welcome to my little corner of the internet."
        }
      />
    </div>
  );
}
