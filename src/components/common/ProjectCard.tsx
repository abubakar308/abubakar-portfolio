"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Show only top 3 tech to keep it clean
  const visibleStack = project.stack.slice(0, 3);
  const extraCount = project.stack.length - 3;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Card className="group relative h-full overflow-hidden flex flex-col border border-border/50 bg-card shadow-sm hover:shadow-2xl hover:shadow-accent-brand/5 hover:border-accent-brand/30 transition-all duration-500 rounded-[2rem]">

          {/* Project Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/0F172A/06B6D4?text=${encodeURIComponent(project.name)}`;
              }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
               <div className="flex gap-2">
                  <Badge className="bg-accent-brand text-white border-none text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-accent-brand/20">
                    Live Product
                  </Badge>
               </div>
            </div>
          </div>

          {/* Card Content */}
          <CardContent className="p-6 sm:p-7 flex flex-col flex-grow space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-heading font-extrabold text-foreground group-hover:text-accent-brand transition-colors duration-300 tracking-tight leading-tight">
                {project.name}
              </h3>
              
              {/* Feature Highlights — impactful bullet-style inline */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-accent-brand font-bold text-[10px] uppercase tracking-[0.15em] opacity-80">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-border" />}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-text-body/70 text-sm leading-relaxed line-clamp-2 font-medium">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1 mt-auto">
              {visibleStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-background/40 text-text-body font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border-border/60"
                >
                  {tech}
                </Badge>
              ))}
              {extraCount > 0 && (
                <div className="relative group/tech">
                  <Badge
                    variant="outline"
                    className="bg-accent-brand/5 text-accent-brand border-accent-brand/20 text-[9px] font-extrabold px-3 py-1 rounded-full cursor-help"
                  >
                    +{extraCount}
                  </Badge>
                  {/* Enhanced Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max max-w-[200px] p-4 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl opacity-0 translate-y-2 group-hover/tech:opacity-100 group-hover/tech:translate-y-0 transition-all duration-300 z-[100] pointer-events-none scale-95 group-hover/tech:scale-100">
                    <p className="text-[10px] font-extrabold text-foreground/40 uppercase tracking-widest mb-3 border-b border-border/50 pb-2">Full Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(3).map((tech) => (
                        <span key={tech} className="text-accent-brand font-bold text-[10px]">
                          #{tech.replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          {/* Footer Buttons */}
          <CardFooter className="px-6 pb-7 sm:px-7 sm:pb-8 flex flex-col gap-3">
            <Button
              onClick={() => setModalOpen(true)}
              className="w-full h-11 bg-accent-brand text-white hover:bg-accent-brand/90 rounded-2xl text-[13px] font-bold shadow-lg shadow-accent-brand/10 hover:shadow-accent-brand/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Eye className="w-4 h-4 mr-2" />
              Project Details
            </Button>

            <div className="grid grid-cols-2 gap-3 w-full">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10 rounded-2xl border-border/70 text-text-body hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-brand/5 text-[11px] font-bold transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-2" />
                  Live Demo
                </Button>
              </a>
              <a href={project.github_client} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10 rounded-2xl border-border/70 text-text-body hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-brand/5 text-[11px] font-bold transition-all"
                >
                  <Github className="w-3.5 h-3.5 mr-2" />
                  Code
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <ProjectModal
        project={modalOpen ? project : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

