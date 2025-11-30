import React from "react";
import { motion } from "framer-motion";
import type { Skill } from "../types";

const About: React.FC = () => {
  const previewSkills: Skill[] = [
    {
      name: "TypeScript",
      level: 10,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Go",
      level: 5,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
  ];

  return (
    <section id="about" className="py-32 relative elegant-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="section-title text-slate-100 mb-4">About</h2>
          <div className="w-16 h-px bg-slate-600 mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed text-slate-300">
                現在、Goに関する勉強をメインで進めています。gRPCやサーバーサイドの技術を学んでおり、とても面白いと感じています。
              </p>
              <p className="text-lg font-light leading-relaxed text-slate-300">
                世の中に価値をバックエンドから提供できるエンジニアになりたいと考えています。
              </p>
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-light mb-8 text-slate-100">
                Key Skills
              </h3>
              <div className="space-y-6">
                {previewSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain opacity-70"
                      />
                    )}
                    <span className="text-lg font-light text-slate-100">
                      {skill.name === "Go" && "Go (Learning)"}
                      {skill.name === "TypeScript" && "TypeScript (Learning)"}
                      {skill.name !== "Go" &&
                        skill.name !== "TypeScript" &&
                        skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
