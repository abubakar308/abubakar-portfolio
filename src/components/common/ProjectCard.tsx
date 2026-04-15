"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Server } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasServerRepo = project.github_server && project.github_server !== "#";
  const visibleStack = project.stack.slice(0, 6);
  const challenges = project.challenges?.slice(0, 2) ?? [];
  const highlights = project.highlights?.slice(0, 2) ?? [];
  const challengePreview = challenges[0];
  const highlightPreview = highlights[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden border-2 border-border/40 bg-card shadow-sm shadow-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 flex flex-col">
        {/* Project Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:blur-[0.5px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/600x400/0F172A/06B6D4?text=${encodeURIComponent(project.name)}`;
            }}
          />
          {/* Premium Hover Overlay — action buttons only */}
          <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none group-hover:pointer-events-auto">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="h-11 rounded-full px-5 bg-primary text-primary-foreground hover:bg-accent-brand shadow-lg shadow-black/20 hover:shadow-accent-brand/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>

                <a href={project.github_client} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-11 rounded-full px-5 shadow-lg shadow-black/15 hover:shadow-black/25 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 space-y-4 flex-grow">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {visibleStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-background/50 text-text-body/80 border-border/60 text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 hover:bg-accent-brand hover:text-primary-foreground hover:border-accent-brand transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-heading font-extrabold text-foreground group-hover:text-accent-brand transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-text-body/70 text-sm leading-relaxed mt-2 line-clamp-2 min-h-10">
              {project.description}
            </p>
          </div>

          {challengePreview && (
            <p className="text-xs text-text-body/75 leading-relaxed line-clamp-1 min-h-4">
              <span className="mr-1.5">⚡</span>
              {challengePreview}
            </p>
          )}

          {highlightPreview && (
            <p className="text-xs text-text-body/75 leading-relaxed line-clamp-1 min-h-4">
              <span className="mr-1.5">🚀</span>
              {highlightPreview}
            </p>
          )}
        </CardContent>

        {/* Footer with Main Actions */}
        <CardFooter className="p-6 pt-0 grid grid-cols-2 gap-3">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="col-span-1">
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-accent-brand rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-accent-brand/20 hover:scale-[1.02] active:scale-[0.98]">
              Live Demo
            </Button>
          </a>
          
          <div className={cn("grid gap-2", hasServerRepo ? "grid-cols-2" : "grid-cols-1")}>
             <a href={project.github_client} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full border-border text-text-body hover:text-accent-brand hover:border-accent-brand rounded-full text-[10px] font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]" title="Client Repo">
                <Github className="w-3.5 h-3.5" />
                {!hasServerRepo && <span className="ml-2">Source</span>}
              </Button>
            </a>
            {hasServerRepo && (
              <a href={project.github_server} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full border-border text-text-body hover:text-accent-brand hover:border-accent-brand rounded-full text-[10px] font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]" title="Server Repo">
                  <Server className="w-3.5 h-3.5" />
                </Button>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
