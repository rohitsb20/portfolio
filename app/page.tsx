import  Hero  from "@/components/Hero";
import Navbar from "../components/Navbar";
import { Projects} from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-background
    transition-colors duration-300"
    >
      <Navbar />

      <div className="container mx-auto px-4 md:px-6">
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}
