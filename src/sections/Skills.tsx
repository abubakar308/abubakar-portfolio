"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Server, Settings, Terminal, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Laptop,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "GSAP", "Framer Motion"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js (Server Actions)", "Prisma", "REST APIs", "GraphQL", "JWT Auth", "Cloudinary"],
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Database Solutions",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma ORM"],
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Firebase", "Postman", "CI/CD", "ESLint"],
    color: "bg-purple-500/10 text-purple-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-light relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
        
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {/* Header */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 text-cyan-vibrant font-bold uppercase tracking-widest text-sm mb-2">
              <span className="h-0.5 w-10 bg-cyan-vibrant" />
              Technical Arsenal
              <span className="h-0.5 w-10 bg-cyan-vibrant" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy">
              Comprehensive <span className="text-slate-text">Skillset</span>
            </h2>
            <p className="text-lg text-slate-text leading-relaxed">
              I leverage a range of cutting-edge technologies to build performant, user-centric web applications and robust architectures.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-2xl ${category.color}`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-navy leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-light text-slate-text border-slate-200 hover:bg-cyan-vibrant hover:text-white hover:shadow-md transition-all duration-200 cursor-default px-3 py-1 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Extra Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white border border-slate-100 shadow-xl flex flex-wrap justify-center gap-12"
          >
             <div className="flex items-center gap-4 group">
               <ShieldCheck className="w-10 h-10 text-cyan-vibrant group-hover:scale-110 transition-transform" />
               <div>
                  <p className="font-heading font-bold text-navy">Security First</p>
                  <p className="text-slate-text text-sm">Focus on robust auth & data protection</p>
               </div>
             </div>
             <div className="flex items-center gap-4 group">
               <Terminal className="w-10 h-10 text-green-vibrant group-hover:scale-110 transition-transform" />
               <div>
                  <p className="font-heading font-bold text-navy">Optimized Code</p>
                  <p className="text-slate-text text-sm">Clean architectural patterns</p>
               </div>
             </div>
             <div className="flex items-center gap-4 group">
               <Laptop className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform" />
               <div>
                  <p className="font-heading font-bold text-navy">Responsive Design</p>
                  <p className="text-slate-text text-sm">Flawless UI on every device</p>
               </div>
             </div>
          </motion.div>
        </div>
    </section>
  );
}
