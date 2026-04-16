"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center space-y-10">
          
          {/* Brand/Identity */}
          <div className="text-center space-y-4">
             <div className="inline-flex items-center gap-3 mb-2 translate-x-3">
                <div className="bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xs shadow-xl shadow-teal-500/20">
                  AB
                </div>
                <span className="text-lg font-heading font-extrabold text-foreground tracking-tight">Abu Bakar</span>
             </div>
             
             <div className="space-y-1">
               <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent-brand">
                 Full Stack Developer
               </p>
               <p className="text-sm font-medium text-text-body/60 max-w-sm mx-auto leading-relaxed">
                 Engineering scalable, production-ready applications with modern technology and clean architecture.
               </p>
             </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border/50 rounded-2xl text-text-body/40 hover:text-accent-brand hover:border-accent-brand/30 hover:shadow-xl transition-all duration-300 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Copyright Area */}
          <div className="pt-10 border-t border-border/20 w-full text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] font-extrabold text-foreground/20 uppercase tracking-[0.4em]">
                © {new Date().getFullYear()} Md Abu Bakar Siddique
              </p>
              <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-border/20" />
                 <p className="text-[9px] font-bold text-foreground/15 uppercase tracking-widest">
                   Built with Precision & Passion
                 </p>
                 <div className="h-px w-8 bg-border/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}