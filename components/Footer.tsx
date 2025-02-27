import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";


const socials = [
    {
        icon : <Github size={24} />,
        href : "#",
        style: "text-muted-foreground hover:text-primary  transition-colors duration-300"
    },
    {
        icon : <Linkedin size={24} />,
        href : "#",
        style: "text-muted-foreground hover:text-primary transition-colors duration-300"
    },
    {
        icon : <Twitter size={24} />,
        href : "#",
        style: "text-muted-foreground hover:text-primary transition-colors duration-300"
    },
   
]


export const Footer = () => {
  return (
    <footer className="py-10 border-t overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5"></div>
      <div className="container mx-auto px-4 md:px-6  relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-0 md:mb-6">
            <Link
              href="#home"
              className="text-xl font-bold gradient-text
    transtion-colors duration-300"
            >
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Creating beautiful web experiences
            </p>
          </div>
          <div className="flex space-x-6">
            {socials.map((social, index) => (
              <Link key={index} href={social.href} className={social.style}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8  border-white/10 text-center">
          <p className="text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
