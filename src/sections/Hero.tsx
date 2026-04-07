"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mdabubakarsiddique", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/mdabubakarsiddique", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com/mdabubakarsiddique", icon: Facebook },
  { name: "Email", href: "mailto:abubakar@example.com", icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-vibrant/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-green-vibrant/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="text-cyan-vibrant border-cyan-vibrant/30 bg-cyan-vibrant/5 hover:bg-cyan-vibrant/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
              Available for Opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight tracking-tighter">
              Hi, I'm <br />
              <span className="text-cyan-vibrant">Md Abu Bakar Siddique</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-300 font-heading">
              Full Stack Developer | Next.js | TypeScript | Prisma | PostgreSQL
            </p>
            <p className="text-slate-text max-w-xl text-lg leading-relaxed">
              I specialize in building exceptionally high-performance, modern, and scalable full-stack web applications with advanced UI/UX and robust backends.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-cyan-vibrant text-navy hover:bg-cyan-vibrant/90 rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-cyan-vibrant/20">
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-bold">
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex gap-6 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-cyan-vibrant hover:border-cyan-vibrant hover:-translate-y-1 transition-all duration-300"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Spinning Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[3px] border-dashed border-cyan-vibrant/30 rounded-full"
            />
            
            {/* Soft Glow */}
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-vibrant/20 to-green-vibrant/10 rounded-full blur-3xl opacity-50" />

            {/* Profile Frame */}
            <div className="relative w-[85%] h-[85%] rounded-3xl overflow-hidden border-4 border-white/10 bg-slate shadow-2xl backdrop-blur-xl group">
              <Image
                src="/abubakar.png"
                alt="Md Abu Bakar Siddique"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
                onError={(e) => {
                  const target = e.target as any;
                  target.src = "https://placehold.co/600x600/0F172A/06B6D4?text=Md+Abu+Bakar+Siddique";
                }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Decorative Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 md:bottom-20 md:-right-8 p-5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl space-y-2 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-vibrant/20 flex items-center justify-center text-cyan-vibrant">
                  <div className="w-4 h-4 bg-cyan-vibrant rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Expertise</p>
                  <p className="text-sm font-medium text-slate-300">Next.js & TypeScript</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
