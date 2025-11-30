import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import type { Experience } from "../types";

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      period: "Apr 2025 - Present",
      title: "Engineer Intern",
      company: "Startup (Confidential)",
      location: "Tokyo",
      description: "開発以外にも、幅広く取り組んでいます。",
    },
    {
      period: "2024 - Present",
      title: "Student (2nd Year)",
      company: "Tokyo City University, Department of Information Science",
      location: "Tokyo",
      description: "CSや情報に関すること全般を学んでいます。",
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 relative elegant-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="section-title text-slate-100 mb-4">
            Experience
          </h2>
          <div className="w-16 h-px bg-slate-600 mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-px h-full bg-slate-600"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.period}-${exp.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className="luxury-card p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={16} className="text-slate-400" />
                      <span className="text-sm font-light tracking-wider uppercase text-slate-500">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light mb-2 text-slate-100">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase size={16} className="text-slate-400" />
                      <span className="text-base font-light text-slate-300">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <MapPin size={16} className="text-slate-400" />
                      <span className="text-sm font-light text-slate-400">
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-base font-light leading-relaxed text-slate-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
