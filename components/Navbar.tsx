"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-button";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-md shadow-md py-3 "
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold gradient-text transition-colors duration-300"
        >
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="nav-link text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
