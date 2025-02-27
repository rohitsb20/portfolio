"use client"

import Link from "next/link"


const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Contact", path: "#contact" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
]

const Navbar = () => {
  return (
   <header>
    <div>
        <Link href="/">Portfolio</Link>


<nav>
    {
        navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
                {link.title}</Link>
        ))
    }
</nav>

    </div>
   </header>
  )
}

export default Navbar