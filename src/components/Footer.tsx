"use client";

import { SiGithub, SiFacebook } from "react-icons/si";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/common/Magnetic";
import { SlSocialLinkedin } from "react-icons/sl";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: SiGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abubakar308/",
    icon: SlSocialLinkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mdabubakar308",
    icon: SiFacebook,
  },
  {
    name: "Email",
    href: "mailto:mdabubakar.dev@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border bg-section px-6 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-brand/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="space-y-3">
          <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-foreground md:text-3xl">
            Md Abu Bakar Siddique
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-body md:text-base">
            Full Stack Developer specializing in building modern, scalable web
            applications with Next.js, TypeScript, and clean user-focused design.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <Magnetic key={social.name}>
                <motion.a
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-text-body shadow-sm transition-all duration-300 hover:border-accent-brand/50 hover:bg-accent-brand/5 hover:text-accent-brand hover:shadow-lg hover:shadow-accent-brand/10"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              </Magnetic>
            );
          })}
        </div>

        <div className="space-y-2">
          <a
            href="mailto:mdabubakar.dev@gmail.com"
            className="text-sm text-text-body transition-colors duration-300 hover:text-accent-brand"
          >
            mdabubakar.dev@gmail.com
          </a>

          <p className="text-xs text-text-body/60">
            © {currentYear} Md Abu Bakar Siddique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}