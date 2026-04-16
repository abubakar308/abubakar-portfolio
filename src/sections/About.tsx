"use client";

import { User, Target, Sparkles, CheckCircle, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/common/Reveal";

const quickFacts = [
  {
    icon: User,
    label: "Who I Am",
    color: "text-accent-brand",
    bg: "bg-accent-brand/10",
    points: [
      "Full Stack Developer based in Dhaka, Bangladesh",
      "Passionate about building clean, scalable web applications",
      "Focused on real-world impact with every line of code",
    ],
  },
  {
    icon: Sparkles,
    label: "What I Do",
    color: "text-green-500",
    bg: "bg-green-500/10",
    points: [
      "Build full-stack apps from database schema to polished UI",
      "Architect REST APIs with Node.js, Express, and Prisma",
      "Craft responsive, accessible interfaces with React & Next.js",
    ],
  },
  {
    icon: Target,
    label: "Current Focus",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    points: [
      "Production-grade SaaS and platform products",
      "TypeScript, PostgreSQL, Prisma ORM, and Next.js App Router",
      "Open to full-stack roles and collaborative projects",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-20">

        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-10 bg-accent-brand" />
              About My Craft
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
              Engineering Scalable <br />
              <span className="text-accent-brand">Solutions</span>
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed max-w-2xl">
              I am a results-driven developer who thrives on turning complex problems 
              into seamless digital experiences. My focus is on writing clean, 
              maintainable code that delivers real business value.
            </p>
          </div>
        </Reveal>

        {/* Quick Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickFacts.map((fact, index) => (
            <Reveal key={fact.label} horizontal delay={0.1 * index} className="h-full">
              <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 rounded-3xl group">
                <CardContent className="p-7 sm:p-9 space-y-6">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl ${fact.bg} ${fact.color} flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <fact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-extrabold text-foreground tracking-tight">
                      {fact.label}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5">
                    {fact.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-sm text-text-body/90 leading-relaxed font-medium"
                      >
                        <CheckCircle
                          className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5 opacity-40"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Quote + CTA — horizontal on desktop */}
        <Reveal delay={0.3}>
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Quote */}
            <div className="lg:col-span-3 p-8 sm:p-10 bg-card/40 border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110">
                <Sparkles className="w-32 h-32 text-accent-brand" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed italic">
                  &quot;Software engineering is the art of solving human problems through elegant, scalable technology.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-accent-brand/40" />
                  <p className="text-sm font-bold text-accent-brand uppercase tracking-widest">
                    My Philosophy
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="lg:col-span-2 p-8 sm:p-10 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between gap-6 overflow-hidden relative shadow-xl shadow-accent-brand/5 group">
              <div className="relative z-10 space-y-2">
                <p className="text-accent-brand font-extrabold text-[10px] tracking-[0.25em] uppercase">
                  Status
                </p>
                <p className="text-2xl font-heading font-extrabold leading-tight text-foreground">
                  Open for <br />Opportunities
                </p>
              </div>
              
              <a href="#projects" className="relative z-10 w-fit">
                <Button
                  size="lg"
                  className="font-bold rounded-2xl px-8 bg-accent-brand text-white hover:bg-accent-brand/90 shadow-lg shadow-accent-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  View My Projects
                </Button>
              </a>

              {/* Decorative glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-brand/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-soft/5 rounded-full blur-[60px] pointer-events-none" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
