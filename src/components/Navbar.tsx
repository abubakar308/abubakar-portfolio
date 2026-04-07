"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
    scrolled
      ? "bg-navy/80 backdrop-blur-md border-b border-white/10 py-3"
      : "bg-transparent"
  );

  const textClasses = cn(
    "transition-colors duration-300",
    scrolled ? "text-white" : "text-white" // Initially white for dark hero
  );

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-xl font-heading font-bold tracking-tighter",
            textClasses
          )}
        >
          MD ABU BAKAR SIDDIQUE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-cyan-vibrant transition-colors",
                textClasses
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-cyan-vibrant text-cyan-vibrant hover:bg-cyan-vibrant hover:text-navy rounded-full px-6"
          >
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className={textClasses}>
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-navy border-white/10 text-white">
              <DrawerHeader>
                <DrawerTitle className="text-center font-heading">
                  Navigation
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col items-center gap-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-cyan-vibrant transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-40 border-cyan-vibrant text-cyan-vibrant hover:bg-cyan-vibrant hover:text-navy rounded-full mt-4"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
