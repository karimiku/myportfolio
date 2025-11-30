import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Database } from "lucide-react";
import type { SkillCategory } from "../types";

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        {
          name: "React",
          level: 20,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          level: 20,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        {
          name: "Go",
          level: 10,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
        {
          name: "Java/Spring Boot",
          level: 15,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Node.js",
          level: 18,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Hono",
          level: 12,
          icon: "/hono-logo.svg",
        },
        {
          name: "MySQL",
          level: 15,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          level: 15,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: Cloud,
      skills: [
        {
          name: "Git/GitHub",
          level: 22,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          level: 18,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "GCP",
          level: 20,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative elegant-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="section-title text-slate-100 mb-4">
            Skills
          </h2>
          <div className="w-16 h-px bg-slate-600 mt-6"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600">
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-light text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain opacity-70"
                      />
                    )}
                    <span className="text-base font-light text-slate-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
