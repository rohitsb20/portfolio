"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
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
      className="min-h-screen flex  items-center 
    pt-20 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent dark:from-purple-500/5"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-400/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Hero content */}
      <div className="container relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 border ">
            <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 opacity-0 translate-y-10">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Rohit Bhadouria</span>
            </h1>
            <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl text-muted-foreground">
              A passionate Frontend Developer specializing in building
              exceptional digital experiences with modern web technologies.
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Link href="#projects" className="font-semibold">
                  View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gradient-border">
                <Link href="#contact" className="tracking-wider">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="border "></div>
        </div>
      </div>
      {/* second div */}
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 relative">
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
            <Image
              src="/images/profile.jpg"
              alt="profile"
              width={500}
              height={500}
              className="w-full h-full object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
