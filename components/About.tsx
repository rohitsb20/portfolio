"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const About = ()=> {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0")

            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0")
                el.classList.remove("opacity-0", "translate-y-10")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 opacity-0 transition-opacity duration-1000 relative overflow-hidden "
    >
      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full filter blur-3xl"></div>

      <div className="container relative z-10 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Fullstack <span className="gradient-text"> Developer</span>
            </h3>

            <p className="text-muted-foreground mb-4">
              I am a passionate and dedicated full-stack developer with a strong
              foundation in web technologies. My expertise includes working with
              ReactJS, NodeJS, JavaScript, HTML, CSS, TailwindCSS, NextJS, and
              MongoDB. I take pride in my ability to create responsive,
              user-friendly web applications that seamlessly blend functionality
              and aesthetics.
            </p>
            <p className="text-muted-foreground mb-6">
              While I have a solid grasp of modern web development practices, I
              am always eager to learn and explore new tools and technologies. I
              thrive in collaborative environments and enjoy working on projects
              that challenge me to grow and innovate.
            </p>
            <Button
         
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <a href="#" download className="text-white text-base tracking-wider">
                <Download className="mr-2 h-4 w-4" />
                My Resume
              </a>
            </Button>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 relative order-1 md:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl -rotate-6 transform scale-105 blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/10 dark:border-white/5 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-50"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="About Me"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover relative z-10"
                  priority={true} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






