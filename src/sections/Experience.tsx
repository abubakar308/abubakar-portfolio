"use client";

import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import Reveal from "@/components/common/Reveal";

const educationItems = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "City University, Dhaka, Bangladesh",
    period: "2022 – 2026",
    description:
      "Specializing in software engineering, system architecture, and modern web technologies. Focus on building scalable digital solutions.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Khalilganj School and College, Kurigram",
    period: "2019 – 2020",
    description:
      "Core focus on advanced mathematics and physics, building a strong analytical foundation for engineering.",
  },
];

const experienceItems = [
  {
    role: "Full Stack Developer (Team Lead)",
    company: "University Academic Project",
    period: "2024 – 2025",
    description:
      "Led a development team to engineer a role-based Certificate Management System. Architected multi-stage approval workflows and secure RBAC systems.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub / Self-Driven",
    period: "2023 – Present",
    description:
      "Actively building and contributing to full-stack projects using Next.js, TypeScript, and Prisma. Focusing on production-ready code and clean architecture.",
  },
];

export default function Experience() {
  return (
    <section id="education" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-20">
        
        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-10 bg-accent-brand" />
              My Journey
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
              Education & <br />
              <span className="text-accent-brand">Professional Growth</span>
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              A timeline of my academic foundation and the professional milestones 
              that have shaped my career as a full-stack engineer.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Column */}
          <div className="space-y-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.25em] text-foreground/40">
                  Academic Background
                </h3>
                <div className="h-px flex-1 bg-border/40" />
              </div>
            </Reveal>
            
            <div className="space-y-10 relative before:absolute before:left-[1.2rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-border/30">
              {educationItems.map((item, index) => (
                <Reveal key={item.period} delay={index * 0.1}>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm flex items-center justify-center z-10 group-hover:border-accent-brand group-hover:bg-accent-brand group-hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all duration-500">
                      <GraduationCap className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </div>
                    <div className="p-8 bg-card/30 border border-border/40 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:shadow-accent-brand/5 backdrop-blur-md group-hover:border-accent-brand/20 group-hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-3">
                         <Calendar className="w-3.5 h-3.5 text-accent-brand opacity-60" />
                          <span className="text-[10px] font-extrabold text-accent-brand uppercase tracking-[0.2em]">
                            {item.period}
                          </span>
                      </div>
                      <h4 className="text-lg font-heading font-extrabold text-foreground tracking-tight group-hover:text-accent-brand transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-bold text-foreground/50 mt-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-text-body/70 mt-5 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.25em] text-foreground/40">
                  Professional Milestones
                </h3>
                <div className="h-px flex-1 bg-border/40" />
              </div>
            </Reveal>

            <div className="space-y-10 relative before:absolute before:left-[1.2rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-border/30">
              {experienceItems.map((item, index) => (
                <Reveal key={item.period} delay={index * 0.1}>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm flex items-center justify-center z-10 group-hover:border-accent-brand group-hover:bg-accent-brand group-hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all duration-500">
                      <Briefcase className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </div>
                    <div className="p-8 bg-card/30 border border-border/40 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:shadow-accent-brand/5 backdrop-blur-md group-hover:border-accent-brand/20 group-hover:-translate-y-1">
                       <div className="flex items-center gap-2 mb-3">
                         <Calendar className="w-3.5 h-3.5 text-accent-brand opacity-60" />
                          <span className="text-[10px] font-extrabold text-accent-brand uppercase tracking-[0.2em]">
                            {item.period}
                          </span>
                      </div>
                      <h4 className="text-lg font-heading font-extrabold text-foreground tracking-tight group-hover:text-accent-brand transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm font-bold text-foreground/50 mt-1">
                        {item.company}
                      </p>
                      <p className="text-sm text-text-body/70 mt-5 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
