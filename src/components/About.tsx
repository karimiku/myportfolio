import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, User } from 'lucide-react'
import type { ContactInfo, Skill } from '../types'

const About: React.FC = () => {
    const personalInfo: ContactInfo[] = [
        { icon: MapPin, label: '所在地', value: '東京' },
        { icon: User, label: '職業', value: 'エンジニア' }
    ]

    const stats = [
        { number: '1年', label: '経験年数' },
        { number: '2+', label: 'プロジェクト' },
        { number: '100%', label: '学習意欲' },
        { number: 'インターン', label: '参加中' }
    ]

    const previewSkills: Skill[] = [
        { name: 'TypeScript', level: 30, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', level: 25, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Hono', level: 15, icon: 'https://hono.dev/images/logo-small.png' },
        { name: 'Java/Spring Boot', level: 20, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ]

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
                    <h2 className="text-4xl lg:text-5xl font-display font-bold italic mb-4 pr-16 overflow-visible" style={{ overflow: 'visible' }}>
                        <span className="gradient-text" style={{ overflow: 'visible', paddingRight: '2rem' }}>プロフィール</span>
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
                            <h3 className="text-2xl font-bold mb-6 text-white">About</h3>
                            <p className="text-dark-300 text-lg leading-relaxed mb-6">
                                現在はエンジニアインターンとして、開発だけではなく、幅広い分野で経験を積んでいます。

                            </p>
                            <p className="text-dark-300 text-lg leading-relaxed">
                                Web開発技術やAI分野に特に興味があり、学習と実践を通じて、技術力の向上を目指しています。
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
                                    <div className="p-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg">
                                        <info.icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-dark-400 text-sm">{info.label}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats/Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-effect p-6 rounded-xl text-center"
                                >
                                    <div className="text-3xl font-bold gradient-text mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-dark-300 text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Preview */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-effect p-6 rounded-xl pr-8"
                        >
                            <h4 className="text-xl font-bold text-white mb-4">主要スキル</h4>
                            <div className="space-y-3">
                                {previewSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && (
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                )}
                                                <span className="text-dark-300 italic">{skill.name}</span>
                                            </div>
                                            <span className="text-primary-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-dark-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.2 }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About