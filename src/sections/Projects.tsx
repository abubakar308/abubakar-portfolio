"use client";

import { useMemo, useState } from "react";
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
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <Reveal>
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-xs sm:text-sm">
              <span className="h-0.5 w-8 bg-accent-brand" />
              My Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
              My Completed{" "}
              <span className="text-accent-brand">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed max-w-xl">
              Real-world, full-stack applications built with modern technologies
              — from concept to production.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {paginatedProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-full px-5 text-xs font-bold"
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
              className="rounded-full px-5 text-xs font-bold"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
