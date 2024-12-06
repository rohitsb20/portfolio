"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navlink from "./Navlink";
import { useState } from "react";
import { motion } from "framer-motion";



const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listVariant = {
   closed:{
        x:"100vw"
    },
    opened:{
        x:0,
        transition:{
          when:"beforeChildren",
          staggerChildren:0.1
        }
    }
    
  }

  const listchildVariant = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 },
  }

  
  const top={
    closed:{rotate:0},
    opened:{rotate:45,
        backgroundColor:"white",
        
    }
  }
const mid= {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
}


   const bottom = {
     closed: { rotate: 0 },
     opened: { rotate: -45, backgroundColor: "white",  },
   };

  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/*     LINKS HERE*/}

      <div className="md:flex gap-4 text-lg w-1/3 items-center justify-center hidden  ">
        {links.map((link) => (
          <Navlink link={link} key={link.name} />
        ))}
      </div>

      {/*     LOGO HERE*/}
      <div className="md:w-1/3 flex items-center justify-center ">
        <Link href="/" className="text-xl text-black font-bold">
          Logo
        </Link>
      </div>

      {/*     SOCIAL MEDIA ICONS HERE*/}
      <div className="md:flex items-center justify-center gap-4 w-1/3 hidden ">
        <Link href="/" className="text-xl">
          <FaLinkedin />
        </Link>
        <Link href="/" className="text-xl">
          <FaGithub />
        </Link>
        <Link href="/" className="text-xl">
          <SiGmail />
        </Link>
      </div>

      {/*   menu button*/}
      <div className="md:hidden">
        <button
          className="flex flex-col justify-between w-10 h-8 z-50 relative
         "
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={top}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={mid}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottom}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className=" bg-black absolute top-0 right-0 w-screen
           h-screen flex  flex-col items-center justify-center text-white text-3xl gap-5  "
          >
            {links.map((link) => (
              <motion.div className="" variants={listchildVariant} key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
