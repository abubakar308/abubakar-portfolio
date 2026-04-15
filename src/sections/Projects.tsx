"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import Reveal from "@/components/common/Reveal";

export default function Projects() {
  const PROJECTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="projects" className="py-24 px-6 bg-background">

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm">
              <span className="h-0.5 w-10 bg-accent-brand" />
              My Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              My Completed <span className="text-accent-brand">Projects</span>
            </h2>

            <p className="text-lg text-text-body leading-relaxed max-w-2xl">
              A selection of my recent works where I&apos;ve balanced high-performance code with exceptional user experiences.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-full px-5"
            >
              Previous
            </Button>
            <p className="text-sm font-semibold text-text-body">
              Page {currentPage} of {totalPages}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="rounded-full px-5"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
