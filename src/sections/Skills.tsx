"use client";

import type { IconType } from "react-icons";
import type React from "react";
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

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
  direction: "left" | "right";
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    direction: "right",
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
    direction: "left",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Other",
    direction: "right",
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
const animationClass = (direction: "left" | "right") => {
  return direction === "left"
    ? "animate-skill-marquee-left"
    : "animate-skill-marquee-right";
};

  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24">
      <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-section to-transparent opacity-50" />

      <div className="relative z-10 mb-16 mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto" width="100%">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="mb-2 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent-brand">
              <span className="h-0.5 w-10 bg-accent-brand" />
              Technical Arsenal
              <span className="h-0.5 w-10 bg-accent-brand" />
            </div>

            <h2 className="font-heading text-4xl font-extrabold text-foreground md:text-5xl">
              Professional <span className="text-accent-brand">Skillset</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-body">
              A recruiter-friendly overview of the core technologies I use to build
              robust, modern products.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <Reveal width="100%" className="mx-auto max-w-7xl px-6">
              <h3 className="ml-4 border-l-4 border-accent-brand px-2 text-lg font-bold uppercase tracking-widest text-foreground/80 md:ml-0">
                {category.title}
              </h3>
            </Reveal>

            <div className="relative overflow-hidden py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

              <div className="group mx-auto max-w-7xl overflow-hidden px-6">
               <div
    className={`flex w-max gap-6 ${animationClass(category.direction)}`}
    style={
      {
        ["--skill-motion-duration"]: "45s",
      } as React.CSSProperties
    }
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.animationPlayState = "running";
    }}
  >
                  {[...category.skills, ...category.skills].map((skill, index) => (
                    <SkillIcon
                      key={`${category.title}-${skill.name}-${index}`}
                      skill={skill}
                      ariaHidden={index >= category.skills.length}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillIcon({
  skill,
  ariaHidden = false,
}: {
  skill: SkillItem;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="group/skill shrink-0"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <div className="flex min-w-[150px] items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-5 text-center transition-all duration-300 hover:scale-[1.05] group-hover/skill:border-accent-brand/50 group-hover/skill:bg-accent-brand/5 group-hover/skill:shadow-xl group-hover/skill:shadow-accent-brand/10 md:min-w-[190px] md:p-6">
        <skill.icon className="h-6 w-6 text-foreground/75 transition-colors group-hover/skill:text-accent-brand md:h-8 md:w-8" />
        <p className="whitespace-nowrap text-sm font-bold uppercase tracking-wider text-text-body transition-colors group-hover/skill:text-foreground md:text-base">
          {skill.name}
        </p>
      </div>
    </div>
  );
}