"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
import Magnetic from "@/components/common/Magnetic";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed left-0 right-0 top-0 z-50 px-6 transition-all duration-500",
    scrolled
      ? "py-3 bg-background/78 backdrop-blur-2xl border-b border-border/70 shadow-[0_10px_35px_rgba(15,23,42,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      : "py-5 bg-background/60 backdrop-blur-md border-b border-transparent"
  );

  const linkClasses =
    "text-sm font-bold uppercase tracking-[0.18em] text-foreground/90 hover:text-accent-brand transition-colors duration-300";

  return (
    <header className={navClasses}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Magnetic>
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group inline-flex items-center"
          >
            <div className="flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:border-accent-brand/50 group-hover:bg-accent-brand/5 group-hover:shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={28}
                height={28}
                priority
                className="object-contain brightness-[0.92] contrast-125 dark:invert dark:brightness-200"
              />
            </div>
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <a href={link.href} className={linkClasses}>
                {link.name}
              </a>
            </motion.div>
          ))}

          <Magnetic>
            <div className="rounded-full border border-border bg-section/90 p-1 shadow-sm dark:bg-card/80">
              <ThemeToggle />
            </div>
          </Magnetic>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Magnetic>
            <div className="rounded-full border border-border bg-section/90 p-1 shadow-sm dark:bg-card/80">
              <ThemeToggle />
            </div>
          </Magnetic>

          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border bg-section/90 text-foreground shadow-sm hover:bg-accent-brand/5 hover:text-accent-brand dark:bg-card/80"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-[82%] max-w-[320px] rounded-l-[1.5rem] border-l border-border bg-background/95 p-0 shadow-2xl backdrop-blur-2xl">
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="flex items-center justify-between p-6 pb-4">
                  <div className="text-sm font-heading font-extrabold uppercase tracking-[0.18em] text-foreground/45">
                    Portfolio
                  </div>

                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full border border-border bg-section/80 text-foreground hover:bg-accent-brand/10 hover:text-accent-brand dark:bg-card/80"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>

                <div className="px-6 py-2">
                  <DrawerTitle className="border-b border-border/60 pb-4 font-heading text-xl font-extrabold text-foreground">
                  </DrawerTitle>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-2xl p-4 text-base font-bold uppercase tracking-[0.14em] text-foreground/80 transition-all duration-300 hover:bg-accent-brand/5 hover:text-accent-brand"
                    >
                      {link.name}
                      <span className="h-1.5 w-1.5 scale-0 rounded-full bg-accent-brand transition-transform duration-300 group-hover:scale-100" />
                    </a>
                  ))}
                </nav>

                <div className="mt-auto p-6 pt-0">
                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-medium text-foreground/35">
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