"use client";

import { Mail, Phone, MessageSquare, Send, CheckCircle, Smartphone } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    label: "Email Me",
    value: "mdabubakar.dev@gmail.com",
    icon: Mail,
    href: "mailto:mdabubakar.dev@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+880 1773398308",
    icon: MessageSquare,
    href: "https://wa.me/8801773398308",
  },
  {
    label: "Call Me",
    value: "+880 1773398308",
    icon: Smartphone,
    href: "tel:+8801773398308",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* ── Left Column: Text & Info ── */}
          <div className="space-y-12">
            <Reveal>
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                  <span className="h-0.5 w-10 bg-accent-brand" />
                  Get In Touch
                </div>
                <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
                  Let&apos;s Build Something <br />
                  <span className="text-accent-brand">Extraordinary</span>
                </h2>
                <p className="text-text-body text-base sm:text-lg max-w-lg leading-relaxed font-medium">
                  I&apos;m currently <span className="text-foreground font-bold">open to full-stack opportunities</span> and collaborations. If you have a project in mind or just want to say hi, feel free to reach out!
                </p>
              </div>
            </Reveal>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card, index) => (
                <Reveal key={card.label} horizontal delay={0.1 * index}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-6 bg-card border border-border/50 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:border-accent-brand/40 hover:shadow-xl hover:shadow-accent-brand/5 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border/40 flex items-center justify-center text-foreground group-hover:text-accent-brand group-hover:bg-accent-brand/5 transition-colors">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/30 mb-0.5">
                          {card.label}
                        </p>
                        <p className="text-sm font-bold text-foreground tracking-tight">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-border/50 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-accent-brand/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110">
                <Mail className="w-32 h-32 text-accent-brand" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-extrabold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-sm text-text-body/60 font-medium">
                    I typically respond within 24 hours.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 ml-1">Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-12 bg-background border border-border/60 rounded-xl px-4 text-sm font-bold text-foreground placeholder:text-text-body/30 focus:outline-none focus:border-accent-brand/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 ml-1">Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full h-12 bg-background border border-border/60 rounded-xl px-4 text-sm font-bold text-foreground placeholder:text-text-body/30 focus:outline-none focus:border-accent-brand/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 ml-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full h-12 bg-background border border-border/60 rounded-xl px-4 text-sm font-bold text-foreground placeholder:text-text-body/30 focus:outline-none focus:border-accent-brand/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 ml-1">Message</label>
                    <textarea
                      placeholder="Tell me about your vision..."
                      rows={5}
                      className="w-full bg-background border border-border/60 rounded-xl p-4 text-sm font-bold text-foreground placeholder:text-text-body/30 focus:outline-none focus:border-accent-brand/50 transition-colors resize-none"
                    />
                  </div>

                  <Button className="w-full h-12 bg-accent-brand text-white hover:bg-accent-brand/90 rounded-xl text-[13px] font-bold shadow-xl shadow-accent-brand/20 transition-all hover:scale-[1.01] active:scale-[0.99]">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
