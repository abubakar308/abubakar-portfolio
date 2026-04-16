"use client";

import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";

type SkillItem = {
  name: string;
  icon: IconType;
  highlight?: boolean;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "ORM",
    skills: [
      { name: "Prisma", icon: SiPrisma, highlight: true },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Subtle Background Glows */}
      <div className="absolute left-[10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-accent-brand/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <Reveal width="100%">
          <div className="space-y-4 max-w-3xl mb-24">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-10 bg-accent-brand" />
              Technical Stack
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
              Crafting with <br />
              <span className="text-accent-brand">Modern Tech</span>
            </h2>
            <p className="text-text-body/70 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              A recruiter-friendly overview of my core competencies, organized by 
              specialization for efficient review and technical assessment.
            </p>
          </div>
        </Reveal>

        {/* Categories Grid */}
        <div className="grid gap-16 md:gap-20">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-8">
              <Reveal delay={catIndex * 0.05}>
                <div className="flex items-center gap-6">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.3em] text-foreground/30 whitespace-nowrap">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
              </Reveal>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <Reveal 
                    key={skill.name} 
                    delay={catIndex * 0.05 + index * 0.02}
                    horizontal
                    className="h-full"
                  >
                    <div className={`
                      group relative overflow-hidden flex items-center gap-3.5 px-6 py-3.5 rounded-2xl border transition-all duration-500
                      ${skill.highlight 
                        ? "bg-accent-brand/[0.08] border-accent-brand/40 shadow-lg shadow-accent-brand/5 scale-[1.05]" 
                        : "bg-card/40 border-border/50 hover:border-accent-brand/30 hover:bg-card hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-brand/5"
                      }
                    `}>
                      {/* Icon Container */}
                      <div className={`
                        flex items-center justify-center transition-all duration-500
                        ${skill.highlight ? "text-accent-brand scale-110" : "text-foreground/40 group-hover:text-accent-brand group-hover:scale-110"}
                      `}>
                        <skill.icon className="w-5 h-5" />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col">
                        <span className={`
                          text-xs font-bold uppercase tracking-widest transition-colors
                          ${skill.highlight ? "text-foreground" : "text-text-body/60 group-hover:text-foreground"}
                        `}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[8px] font-extrabold text-accent-brand uppercase tracking-tighter mt-0.5 animate-pulse">
                            Primary Choice
                          </span>
                        )}
                      </div>

                      {/* Decorative corner glow for highlight */}
                      {skill.highlight && (
                        <div className="absolute top-0 right-0 h-8 w-8 bg-accent-brand/10 blur-xl rounded-full" />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}