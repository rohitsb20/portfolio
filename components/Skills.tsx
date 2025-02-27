"use client";
import { useEffect, useRef } from "react";

import {
  FaGit,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiExpress, SiMongodb, SiSocketdotio, SiRedux } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  {
    name: "React JS",
    icon: <FaReact />,
  },
  {
    name: "Next Js",
    icon: <RiNextjsFill />,
  },
  {
    name: "Express Js",
    icon: <SiExpress />,
  },
  {
    name: "Mongo Db",
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "Socket.io ",
    icon: <SiSocketdotio />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Git",
    icon: <FaGit />,
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".skill-item");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20" id="skills">
      {/* Gradient background */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-400/10 rounded-full filter blur-3xl"></div>

      <div className="container z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item opacity-0 translate-y-10 
                        transition-all duration-300 flex flex-col items-center"
            >
              <div
                className="skill-icon bg-gradient-to-br
               from-purple-500/5 to-pink-500/5
                p-4 rounded-xl shadow-md border
                 border-white/10 dark:border-white/5
                 
                 hover:border-purple-500/30 w-20 h-20 
                 flex items-center justify-center 
                 mb-3skill-icon
                 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                <div className="text-5xl z-10">{skill.icon}</div>
              </div>
              <span className="capitalise text-sm font-medium ">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
