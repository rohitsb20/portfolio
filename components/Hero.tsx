"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    const elements = section?.querySelectorAll(".animate-on-scroll");

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent dark:from-purple-500/5"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-400/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&#39;m <span className="gradient-text">Rohit Bhadouria</span>
            </h1>
            <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl text-muted-foreground">
              A passionate Frontend Developer specializing in building
              exceptional digital experiences with modern web technologies.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 flex space-x-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gradient-border"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="John Doe - Frontend Developer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </a>
    </section>
  );
}
