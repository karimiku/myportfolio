import React from "react";
import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import type { ContactInfo, Skill } from "../types";

const About: React.FC = () => {
  const personalInfo: ContactInfo[] = [
    { icon: MapPin, label: "所在地", value: "東京" },
    { icon: User, label: "現在", value: "学生エンジニア" },
  ];

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
    <section id="about" className="py-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              プロフィール
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">About</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                アイデアを形にする瞬間が好きで、手の届くソフトウェアから価値を生み出したいと考えています。
                まだ学生ですが、現場で役立つ技術を自分の手で磨いていくことにワクワクしています。
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                TypeScriptとGoを並行して勉強しながらプロダクトを組み立て、
                「作って終わり」ではなく、使う人に価値が伝わるソフトウェアを実装できるエンジニアを目指しています。
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl flex items-center space-x-3"
                >
                  <div className="p-2 bg-gradient-to-r from-sky-400 to-purple-400 rounded-lg">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{info.label}</p>
                    <p className="text-slate-800 font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl pr-8 space-y-4"
            >
              <h4 className="text-xl font-bold text-slate-900">主要スキル</h4>
              <div className="space-y-3">
                {previewSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span className="text-slate-800 font-medium">
                      {skill.name === "Go"
                        ? "Go（学習中）"
                        : skill.name === "TypeScript"
                          ? "TypeScript（学習中）"
                          : skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
