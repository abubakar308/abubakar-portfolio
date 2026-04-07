import Link from "next/link";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mdabubakarsiddique", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/mdabubakarsiddique", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com/mdabubakarsiddique", icon: Facebook },
  { name: "Email", href: "mailto:abubakar@example.com", icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-slate-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-navy tracking-tighter">
            MD ABU BAKAR SIDDIQUE
          </h2>
          <p className="text-slate-text max-w-md mx-auto">
            Full Stack Developer specializing in building modern, scalable web applications with Next.js and TypeScript.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-text hover:text-cyan-vibrant hover:border-cyan-vibrant hover:shadow-lg transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <div className="text-slate-text text-sm">
          <p>© {currentYear} Md Abu Bakar Siddique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
