import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import TypeWriter from "./TypeWriter";
import type { SocialLink } from "../types";

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/karimiku", label: "GitHub" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden luxury-bg-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm font-light tracking-widest uppercase text-slate-400"
              >
                Backend Engineer
              </motion.p>
              
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-slate-100 leading-none">
                <span className="block mb-2">Hello,</span>
                <span className="gradient-text block">I'm Rikuto</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-6"
            >
                    <a
                      href="#projects"
                      className="luxury-button"
                    >
                      View Projects
                    </a>
              <a
                href="#about"
                className="luxury-button-outline"
              >
                About Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 0.7 }}
                  className="text-slate-100 transition-opacity"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 border border-slate-700 overflow-hidden">
                <motion.img
                  src="/profile-dog.JPG"
                  alt="プロフィール写真"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "0% 20%" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes(".JPG")) {
                      target.src = "/profile-dog.jpg";
                    } else if (target.src.includes(".jpg")) {
                      target.src = "/profile-dog.png";
                    } else {
                      target.src =
                        "https://via.placeholder.com/400x400/000000/ffffff?text=Rikuto";
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
