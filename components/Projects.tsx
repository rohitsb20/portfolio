"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Cakify",
    description:
      "A fully responsive e-commerce platform built with Reactjs and Tailwind CSS with cart functionality and payment integration.",
    image: "/3",
    tags: [
      "React Js",
      "Tailwind CSS",
      "Razorpay",
      "node Js",
      "Express Js",
      "MongoDB",
    ],
    liveLink: "#link",
    githubLink: "https://github.com/rohitsb20/cakeapp",
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern portfolio website with dark mode, animations, using Nextjs , Tailwind Css and responsive design.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn", "TypeScript"],
    liveLink: "#",
    githubLink: "https://github.com/rohitsb20/portfolio",
  },
  {
    id: 3,
    title: "Movietankapp",
    description:
      "A movie app that fetches data from the TMDB API and displays popular movies, top-rated movies, and upcoming movies.",
    image: "/images/movie.png",
    tags: ["Next JS", "Tailwind CSS", "TMDB API"],
    liveLink: "https://movietankapp.vercel.app/",
    githubLink: "https://github.com/rohitsb20/movieapp",
  },
  {
    id: 4,
    title: "Chat App",
    description:
      "A real-time chat application with rooms and user authentication.",
    image: "/3",
    tags: ["React JS", "Socket.io", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "https://github.com/rohitsb20/chatapp1",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    const elements = section?.querySelectorAll(".project-card");

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section ref={sectionRef} id="projects" 
    className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full filter blur-3xl"></div>

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card opacity-0 translate-y-20 transition-all duration-700 rounded-lg overflow-hidden shadow-lg bg-card-gradient backdrop-blur-sm border border-white/10 dark:border-white/5 hover:border-purple-500/50 dark:hover:border-purple-500/30`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-0"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 relative z-10"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gradient-border"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
