"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
    scrolled
      ? "py-3 bg-background/90 backdrop-blur-2xl border-b border-border/70 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      : "py-5 bg-background/0 border-b border-transparent"
  );

  return (
    <header className={navClasses}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Logo — "AB" monogram */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-3.5 group"
        >
          <div className="bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            AB
          </div>
          <span className="text-xl font-heading font-bold text-foreground tracking-tight">Abu Bakar</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex lg:gap-4">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className="px-4 py-2 rounded-xl text-[13px] font-bold text-foreground/70 hover:text-accent-brand hover:bg-accent-brand/5 transition-all duration-300 uppercase tracking-[0.14em]"
              >
                {link.name}
              </a>
            </motion.div>
          ))}

          <div className="ml-4 rounded-full border border-border bg-card/50 p-1 shadow-sm transition-hover hover:border-accent-brand/40">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl border border-border bg-card/50 text-foreground shadow-sm hover:bg-accent-brand/5 hover:text-accent-brand h-10 w-10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-[85%] max-w-[320px] rounded-l-[2rem] border-l border-border bg-background/98 p-0 shadow-2xl backdrop-blur-3xl">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-7 pb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-sm shadow-md shadow-teal-500/10">
                      AB
                    </div>
                    <span className="text-lg font-bold text-foreground tracking-tight">
                      Abu Bakar
                    </span>
                  </div>
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl border border-border bg-card/50 text-foreground hover:bg-accent-brand/10 hover:text-accent-brand h-9 w-9"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>

                <div className="px-7 py-2">
                  <DrawerTitle className="border-b border-border/60 pb-4 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                    Navigation
                  </DrawerTitle>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[0.15em] text-foreground/75 transition-all duration-300 hover:bg-accent-brand/5 hover:text-accent-brand"
                    >
                      {link.name}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  ))}
                </nav>

                <div className="mt-auto p-7 pt-4">
                  <div className="pt-6 text-center border-t border-border/40">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                      Full Stack Developer
                    </p>
                    <p className="text-[10px] font-medium text-foreground/20 mt-1">
                      © {new Date().getFullYear()} Md Abu Bakar Siddique
                    </p>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}