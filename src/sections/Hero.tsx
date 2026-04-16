"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
  Facebook,
  Mail,
  ArrowRight,
  FolderGit2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdabubakar.dev@gmail.com&su=New%20Project%20Inquiry%20%7C%20Portfolio", icon: Mail },
];

export default function Hero() {
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const parallaxAmount = isMobile ? 0.35 : 1;
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, 60 * parallaxAmount]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -45 * parallaxAmount]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -30 * parallaxAmount]);
  const floatingCardY = useTransform(scrollYProgress, [0, 1], [0, -20 * parallaxAmount]);

  const backgroundX = useTransform(x, (val) => 50 + val * 100);
  const backgroundY = useTransform(y, (val) => 50 + val * 100);
  const background = useMotionTemplate`radial-gradient(600px circle at ${backgroundX}% ${backgroundY}%, rgba(6, 182, 212, 0.12), transparent 80%)`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden selection:bg-accent-brand/30 pt-24 md:pt-32"
    >
      {/* Background Interactive Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orbLeftY }}
          className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-accent-brand/8 rounded-full blur-[140px]"
        />
        <motion.div
          style={{ y: orbRightY }}
          className="absolute top-[15%] -right-[8%] w-[40%] h-[40%] bg-accent-soft/6 rounded-full blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-100px)]">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 py-10 md:py-0"
          >
            {/* Recruiting Badge */}
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-[10px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-accent-brand/5 border-accent-brand/20 text-accent-brand backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-brand"></span>
                </span>
                Open for Opportunities
              </Badge>
            </div>

            {/* Headline Group */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold text-foreground leading-[0.9] tracking-tighter uppercase">
                <span className="block text-accent-brand">Full Stack</span>
                <span className="block">Developer</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-border" />
                <p className="text-lg sm:text-xl font-bold text-foreground/60 tracking-tight">
                  Md Abu Bakar Siddique
                </p>
              </div>
            </div>

            {/* Identity Line */}
            <p className="text-base sm:text-lg text-text-body font-medium leading-relaxed max-w-xl">
              I build <span className="text-foreground font-bold">scalable, production-ready applications</span> with a focus on performance, clean architecture, and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects">
                <Button className="bg-accent-brand text-white hover:bg-accent-brand/90 h-12 px-8 rounded-2xl text-[13px] font-bold shadow-xl shadow-accent-brand/20 hover:shadow-accent-brand/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <FolderGit2 className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-card hover:border-accent-brand/50 hover:text-accent-brand h-12 px-8 rounded-2xl text-[13px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a
                href="/Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                download="Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                className="group inline-flex items-center gap-2.5 text-text-body/60 hover:text-foreground px-4 h-12 transition-all font-bold text-[13px] tracking-wide"
              >
                <Download className="w-4 h-4 transition-transform group-hover:y-1" />
                Resume
              </a>
            </div>

            {/* Social Proof / Links */}
            <div className="flex gap-4 items-center pt-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/20 mr-2">Connect</span>
              {socialLinks.map((social) => (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-card/50 border border-border/50 rounded-xl text-text-body/60 hover:text-accent-brand hover:border-accent-brand/30 hover:shadow-lg transition-all"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column — Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center md:justify-end"
            style={{
              perspective: 1000,
              y: heroImageY,
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
            }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-accent-brand/20 rounded-full"
              />

              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent-brand/15 to-accent-soft/8 rounded-full blur-[70px] opacity-50" />

              {/* Profile Frame */}
              <div className="relative w-[88%] h-[88%] rounded-[2rem] overflow-hidden border-2 border-border bg-card shadow-2xl group transition-all duration-500 hover:border-accent-brand/50 hover:shadow-accent-brand/10">
                <Image
                  src="/images/abubakar.png"
                  alt="Md Abu Bakar Siddique"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x600/0F172A/06B6D4?text=Abu+Bakar";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating status card */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ y: floatingCardY }}
                className="absolute -bottom-2 right-2 md:-bottom-4 md:-right-6 p-4 bg-card/90 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent-brand/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-accent-brand rounded-full animate-ping" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-foreground uppercase tracking-widest opacity-50">
                      Status
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Available to Hire
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
