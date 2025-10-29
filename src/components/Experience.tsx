import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import type { Experience } from "../types";

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      period: "2025年4月 - 現在",
      title: "エンジニアインターン",
      company: "スタートアップ（社名非公開）",
      location: "東京",
      description: "開発以外にも、幅広く取り組んでいます。",
    },
    {
      period: "2024年 - 現在",
      title: "在学中（2年生）",
      company: "東京都市大学 情報工学部 情報科学科",
      location: "東京",
      description: "CSや情報に関すること全般を学んでいます。",
    },
  ];

  return (
        <section id="experience" className="py-20 bg-white/60 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-12 overflow-visible"
        >
          <h2
            className="text-4xl lg:text-5xl font-display font-bold italic mb-4 pr-16 overflow-visible"
            style={{ overflow: "visible" }}
          >
            <span
              className="gradient-text"
              style={{ overflow: "visible", paddingRight: "2rem" }}
            >
              経歴
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full max-md:left-8"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } max-md:!flex-col max-md:text-center`}
              >
                {/* Content */}
                <div className="w-5/12 max-md:w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect p-4 sm:p-6 rounded-2xl relative pr-8"
                  >
                    {/* Arrow */}
                    <div
                      className={`absolute top-8 ${
                        index % 2 === 0 ? "-right-3" : "-left-3"
                      } w-6 h-6 bg-gradient-to-r from-sky-400 to-purple-400 rotate-45`}
                    ></div>

                    <div className="flex items-center gap-2 text-sky-500 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center max-md:w-auto max-md:absolute max-md:left-6 max-md:top-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full border-4 border-white relative z-10"
                  ></motion.div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12 max-md:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
