"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Reset form after successful submission
      setFormdata({
        name: "",
        email: "",
        message: "",
      });

      // Show success message
      toast.success("Message sent successfully!");
    } catch (error) {
      // Show error message
      console.log(error);
      
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");

            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 opacity-0 transition-opacity duration-1000 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400/10 rounded-full filter blur-3xl"></div>

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div
          className="grid grid-cols-1
        md:grid-cols-2 gap-8 "
        >
          <div
            className="animate-on-scroll
             opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div
              className="flex items-center space-x-4 my-5
            "
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Email
                </h4>
                <p className="text-foreground">rohitbhadouria.work1.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Location
                </h4>
                <p className="text-foreground capitalize">delhi, india</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 mt-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-xl border border-white/10 dark:border-white/5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-background/50 backdrop-blur-sm border-white/10"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Your email"
              type="email"
              required
              className="w-full bg-background/50 backdrop-blur-sm border-white/10"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formdata.message}
              onChange={handleChange}
              required
              className="w-full min-h-[150px] bg-background/50 backdrop-blur-sm border-white/10"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
