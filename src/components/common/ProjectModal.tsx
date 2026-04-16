"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Server,
  CheckCircle2,
  Zap,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const hasServerRepo = project?.github_server && project.github_server !== "#";

  // ESC key close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Panel */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 border border-border/60 text-text-body hover:text-foreground hover:bg-card hover:border-accent-brand/50 transition-all duration-200 backdrop-blur-sm shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Scrollable Content */}
            <div 
              className="overflow-y-auto flex-1 min-h-0" 
              data-lenis-prevent
            >
              {/* Project Image + Title */}
              <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x450/0F172A/06B6D4?text=${encodeURIComponent(project.name)}`;
                  }}
                />
                {/* Gradient overlay for title legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Title overlay on image */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-7"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-3.5 h-3.5 text-accent-brand" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-brand">
                      Full-Stack Project
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
                    {project.name}
                  </h2>
                </motion.div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-7">

                {/* Overview */}
                <section>
                  <SectionLabel>Project Overview</SectionLabel>
                  <p className="text-text-body leading-relaxed text-sm md:text-base mt-3">
                    {project.description}
                  </p>
                </section>

                {/* Key Features */}
                {project.highlights && project.highlights.length > 0 && (
                  <section>
                    <SectionLabel>Key Features</SectionLabel>
                    <ul className="mt-3 space-y-2.5">
                      {project.highlights.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-text-body"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Tech Stack */}
                <section>
                  <SectionLabel>Tech Stack</SectionLabel>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 + i * 0.04 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-background border-border text-text-body text-xs font-semibold px-3 py-1 hover:bg-accent-brand/10 hover:border-accent-brand/60 hover:text-accent-brand transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Challenges & Solutions */}
                {project.challenges && project.challenges.length > 0 && (
                  <section>
                    <SectionLabel>Challenges & Solutions</SectionLabel>
                    <ul className="mt-3 space-y-2.5">
                      {project.challenges.map((challenge, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-text-body"
                        >
                          <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pb-1">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full h-11 bg-accent-brand text-white hover:bg-accent-brand/90 rounded-xl font-bold text-sm shadow-lg shadow-accent-brand/25 hover:shadow-accent-brand/35 transition-all hover:scale-[1.02] active:scale-[0.98]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.github_client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-11 rounded-xl font-bold text-sm border-border hover:border-accent-brand hover:text-accent-brand transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {hasServerRepo ? "Client Repo" : "GitHub Repo"}
                    </Button>
                  </a>
                  {hasServerRepo && (
                    <a
                      href={project.github_server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full h-11 rounded-xl font-bold text-sm border-border hover:border-accent-brand hover:text-accent-brand transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Server className="w-4 h-4 mr-2" />
                        Server Repo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Reusable section label component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent-brand flex items-center gap-2">
      <span className="h-px w-6 bg-accent-brand inline-block" />
      {children}
    </h3>
  );
}
