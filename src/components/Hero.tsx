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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200 rounded-full blur-[140px] animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full blur-[160px] animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-3xl p-4 sm:p-6 lg:p-8 mb-8 transition-all duration-300 w-full overflow-visible"
              style={{ minWidth: "280px" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="w-3 h-3 bg-red-400 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <span className="text-slate-500 text-sm ml-3 font-mono">
                  portfolio.tsx
                </span>
              </div>
              <div className="hero-text-container space-y-3 sm:space-y-4 md:space-y-5 w-full overflow-visible">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold italic leading-tight overflow-visible">
                  <div className="overflow-visible whitespace-nowrap">
                    <TypeWriter
                      text="Hello World"
                      delay={500}
                      speed={120}
                      className="text-sky-600"
                    />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold italic leading-tight overflow-visible">
                  <div className="overflow-visible whitespace-nowrap">
                    <span className="gradient-text">
                      <TypeWriter text="I'm Rikuto" delay={1500} speed={80} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(56, 189, 248, 0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-500 text-white rounded-full font-semibold text-center transition-all duration-300 text-sm sm:text-base drop-shadow-lg"
              >
                プロジェクトを見る
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 glass-effect text-slate-700 rounded-full font-semibold text-center border border-cyan-300/60 hover:border-cyan-400 transition-all duration-300 text-sm sm:text-base"
              >
                詳しく見る
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 glass-effect rounded-full text-slate-500 hover:text-slate-900 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:pl-12 xl:pl-16"
          >
            <div className="relative lg:ml-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-purple-400 to-rose-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-white"></div>
              </motion.div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/profile-dog.JPG"
                alt="プロフィール写真"
                className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover glow-box border-4 border-white"
                style={{ objectPosition: "0% 20%" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes(".JPG")) {
                    target.src = "/profile-dog.jpg";
                  } else if (target.src.includes(".jpg")) {
                    target.src = "/profile-dog.png";
                  } else {
                    target.src =
                      "https://via.placeholder.com/400x400/6366f1/ffffff?text=Profile";
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500 cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
