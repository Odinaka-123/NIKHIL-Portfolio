"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Twitter,
  Youtube,
  Send,
  BarChart3,
  Brain,
  ShieldCheck,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
            N
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">
            NIKHIL
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="#strategies"
              className="hover:text-foreground transition-colors"
            >
              Strategies
            </a>
            <a
              href="#community"
              className="hover:text-foreground transition-colors"
            >
              Community
            </a>
            <a
              href="#education"
              className="hover:text-foreground transition-colors"
            >
              Education
            </a>
          </div>
          <ThemeToggle />
          <Button size="sm" className="hidden md:flex rounded-full px-5">
            Join Signal Group
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIVE MARKET INSIGHTS ACTIVE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8"
          >
            Institutional Trading <br />
            <span className="text-muted-foreground">For Retail Investors.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Bridging high-performance athletics with high-stakes finance. I
            simplify complex market structures to help you trade with
            institutional precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="https://t.co/oEXODRY6g1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-base shadow-lg"
              >
                Access Free Community
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base glass hover:bg-muted bg-transparent"
            >
              Explore Education
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: Users, label: "Community Members", value: "7,200+" },
            { icon: TrendingUp, label: "Market Accuracy", value: "84%" },
            { icon: Globe, label: "Global Presence", value: "24/7" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-colors"
            >
              <stat.icon className="h-6 w-6 text-primary mb-4" />
              <div className="text-3xl font-heading font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            <header className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] flex flex-col justify-between lg:w-1/3">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-2">
                    Nikhil
                  </h1>
                  <h2 className="text-xl font-medium text-foreground/80 mb-6">
                    Financial Trader & Educator
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mb-8">
                    I simplify institutional market structure for retail
                    traders, bridging high-performance athletics with
                    high-stakes finance.
                  </p>
                </motion.div>

                <nav className="hidden lg:block space-y-4">
                  {["About", "Framework", "Platforms", "Contact"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
                      >
                        <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                        {item}
                      </a>
                    )
                  )}
                </nav>
              </div>

              <div className="flex items-center gap-6 mt-12 lg:mt-0">
                <a
                  href="#"
                  aria-label="github"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="twitter"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="youtube"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="send"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
                <div className="ml-auto">
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="lg:w-2/3 space-y-32">
              <section id="about" className="scroll-mt-24">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a trader passionate about market psychology and precision
                  execution. My approach is rooted in
                  <span className="text-foreground font-medium">
                    {" "}
                    institutional order flow
                  </span>
                  , a perspective gained from years of studying how the biggest
                  players move capital.
                </p>
                <br />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently, I lead a community of{" "}
                  <span className="text-foreground font-medium">
                    7k+ members
                  </span>{" "}
                  at
                  <span className="text-foreground font-medium">
                    {" "}
                    NIKHIL_500
                  </span>
                  , focusing on transparency and sustainable growth. In the
                  past, I've transitioned from professional athletics to
                  finance, bringing the same level of rigor and discipline to
                  the charts.
                </p>
              </section>

              <section id="framework" className="scroll-mt-24">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-foreground/50 lg:hidden">
                  Framework
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Psychology",
                      icon: Brain,
                      desc: "Mastering the mental game with institutional mindset training.",
                      tags: ["Mindset", "Discipline"],
                    },
                    {
                      title: "Market Structure",
                      icon: BarChart3,
                      desc: "Identifying true institutional order flow and market direction.",
                      tags: ["SMC", "Flow"],
                    },
                    {
                      title: "Risk Systems",
                      icon: ShieldCheck,
                      desc: "Capital preservation systems designed for long-term survival.",
                      tags: ["Risk Management"],
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-6 rounded-xl hover:bg-muted/30 border border-transparent hover:border-border/50 transition-all"
                    >
                      <div className="flex gap-6">
                        <div className="mt-1 p-2 rounded-lg bg-secondary">
                          <item.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                          </div>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="flex gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section id="platforms" className="scroll-mt-24">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-foreground/50 lg:hidden">
                  Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Telegram Community",
                      sub: "7.2k+ Members",
                      icon: Send,
                    },
                    {
                      label: "YouTube Academy",
                      sub: "Weekly Lessons",
                      icon: Youtube,
                    },
                    {
                      label: "X / Twitter",
                      sub: "Market Updates",
                      icon: Twitter,
                    },
                    {
                      label: "Global Network",
                      sub: "24/7 Coverage",
                      icon: Globe,
                    },
                  ].map((platform) => (
                    <div
                      key={platform.label}
                      className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors group"
                    >
                      <platform.icon className="w-6 h-6 mb-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="font-bold text-lg mb-1">
                        {platform.label}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                        {platform.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="contact" className="pb-24">
                <div className="p-12 rounded-3xl bg-foreground text-background text-center">
                  <h3 className="text-3xl font-heading font-bold mb-6">
                    Ready to trade with precision?
                  </h3>
                  <p className="text-background/70 mb-8 max-w-md mx-auto">
                    Join our institutional flow community and start seeing the
                    markets for what they really are.
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full bg-background text-foreground hover:bg-background/90 px-8"
                  >
                    Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="border-t border-border pt-16 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                N
              </div>
              <span className="font-heading font-bold text-lg tracking-tight uppercase">
                NIKHIL_500
              </span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                About
              </a>
              <a href="#" className="hover:text-foreground">
                Services
              </a>
              <a href="#" className="hover:text-foreground">
                Disclaimer
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground space-y-4">
            <p>
              © 2025 NIKHIL_500. All Rights Reserved. Trading involves
              significant risk.
            </p>
            <p className="max-w-3xl mx-auto leading-relaxed opacity-50">
              Disclaimer: The content provided on this website and associated
              platforms is for educational purposes only. It is not financial
              advice. Past performance is not indicative of future results.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
