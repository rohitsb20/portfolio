import  Hero  from "@/components/Hero";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-background
    transition-colors duration-300"
    >
      <Navbar />

      <div className="container mx-auto px-4 md:px-6">
        <Hero/>
      </div>
    </div>
  );
}
