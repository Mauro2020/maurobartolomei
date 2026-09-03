import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { locales } from "@/lib/i18n";

const content = locales.en.projects;
const projects = locales.en.shared.portfolioProjects;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function ProjectsPageEn() {
  return (
    <>
      <PageHero {...content.hero} />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
