import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cloud, Database } from 'lucide-react'
import type { SkillCategory } from '../types'

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'フロントエンド',
            icon: Code,
            skills: [
                { name: 'React', level: 25, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'TypeScript', level: 30, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Tailwind CSS', level: 20, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
                { name: 'Vite', level: 15, icon: 'https://vitejs.dev/logo.svg' }
            ]
        },
        {
            title: 'バックエンド',
            icon: Database,
            skills: [
                { name: 'Java/Spring Boot', level: 20, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'Hono', level: 15, icon: 'https://hono.dev/images/logo-small.png' },
                { name: 'Node.js', level: 25, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'PostgreSQL', level: 18, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
            ]
        },
        {
            title: 'インフラ・ツール',
            icon: Cloud,
            skills: [
                { name: 'Bun', level: 25, icon: 'https://bun.sh/logo.svg' },
                { name: 'Git/GitHub', level: 22, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Docker', level: 18, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'GCP', level: 20, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
            ]
        }
    ]



    return (
        <section id="skills" className="py-20 overflow-visible">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-12 overflow-visible"
                >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold italic mb-4 pr-16 overflow-visible" style={{ overflow: 'visible' }}>
                        <span className="gradient-text" style={{ overflow: 'visible', paddingRight: '2rem' }}>スキル</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Technical Skills */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="glass-effect p-6 rounded-2xl pr-8"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl mr-4">
                                    <category.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3 pr-6">
                                                {skill.icon && (
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                )}
                                                <span className="text-dark-300 font-medium italic">{skill.name}</span>
                                            </div>
                                            <span className="text-primary-400 text-sm font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-primary-500 to-purple-500 h-full rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills