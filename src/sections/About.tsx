"use client";

import { motion } from "framer-motion";
import { User, BookOpen, Target, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Journey",
    icon: User,
    description: "From curious tinkerer to high-performance Full Stack Developer.",
    color: "text-cyan-vibrant",
    bg: "bg-cyan-vibrant/10",
  },
  {
    title: "Interests",
    icon: Sparkles,
    description: "Passionate about modern UI/UX, AI integration, and app scalability.",
    color: "text-green-vibrant",
    bg: "bg-green-vibrant/10",
  },
  {
    title: "Goals",
    icon: Target,
    description: "Building production-grade tools that solve real-world problems.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="space-y-4 max-w-2xl"
        >
          <div className="flex items-center gap-3 text-cyan-vibrant font-bold uppercase tracking-widest text-sm">
            <span className="h-0.5 w-10 bg-cyan-vibrant" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy">
            Crafting Digital <span className="text-slate-text">Experiences</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-slate-text space-y-6">
              <p>
                Hello! I'm <strong>Md Abu Bakar Siddique</strong>, a results-oriented Full Stack Developer with a deep love for building exceptionally clean, fast, and feature-rich web applications. My journey into development began with a fascination for how things work under the hood, and it has since evolved into a professional career focused on modern technologies and user-centric design.
              </p>
              <p>
                Whether it's architecting a robust backend with <strong>Next.js</strong> and <strong>PostgreSQL</strong> or crafting a pixel-perfect, interactive interface with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>, I bring a meticulous and innovative approach to every project.
              </p>
              <p>
                Beyond the code, I value clean architecture, collaborative problem-solving, and continuous learning. I'm always exploring the latest trends in the developer ecosystem to stay at the forefront of the industry.
              </p>
            </div>

            {/* Quote / Highlight */}
            <div className="p-6 bg-slate-light border-l-4 border-cyan-vibrant rounded-r-2xl italic text-navy font-medium text-lg">
              "Building great software is not just about writing code; it's about solving human problems through technology."
            </div>
            
            <div className="flex gap-4 items-center text-slate-text">
               <Heart className="w-5 h-5 text-red-500 fill-red-500" />
               <p className="text-sm">Driven by passion, fueled by coffee, and inspired by innovation.</p>
            </div>
          </motion.div>

          {/* Highlights Section */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 flex gap-6 items-start">
                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} flex-shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-xl font-heading font-bold text-navy">{item.title}</h3>
                       <p className="text-slate-text leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 p-8 rounded-3xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
            >
              <div className="z-10 text-center md:text-left">
                <p className="text-cyan-vibrant font-bold text-sm tracking-widest uppercase mb-1">Status</p>
                <p className="text-2xl font-heading font-extrabold">Open for Collaboration</p>
              </div>
              <Button size="lg" variant="secondary" className="bg-white text-navy font-bold rounded-full px-8 hover:bg-slate-100 z-10 whitespace-nowrap">
                Check My Projects
              </Button>
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-vibrant/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
