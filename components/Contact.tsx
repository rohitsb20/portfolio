"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 opacity-0 transition-opacity duration-1000 relative"
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
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 mt-4">
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
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
