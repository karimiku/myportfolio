import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import type { Project } from '../types'

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'Slack要約Bot',
            description: 'Slackチャンネルの会話を自動で要約し、重要なポイントを抽出するBot。GCP Cloud FunctionsとSchedulerを使用して定期実行。',
            image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Slack+Bot',
            tags: ['Node.js', 'Bun', 'Docker', 'GCP Functions'],
            liveUrl: '#',
            githubUrl: 'https://github.com/karimiku',
            featured: true
        },
        {
            title: '社内コミュニケーション促進ツール',
            description: 'チームメンバーに共通の質問を投げかけ、回答をSlack内で共有することで社内コミュニケーションを活性化するツール。',
            image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Communication+Tool',
            tags: ['GAS', 'Slack API', 'TypeScript', 'Automation'],
            liveUrl: '#',
            githubUrl: 'https://github.com/karimiku',
            featured: true
        }
    ]

    return (
        <section id="projects" className="py-20 bg-dark-800/30 overflow-visible">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-12 overflow-visible"
                >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold italic mb-4 pr-16 overflow-visible" style={{ overflow: 'visible' }}>
                        <span className="gradient-text" style={{ overflow: 'visible', paddingRight: '2rem' }}>プロジェクト・実績</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-effect rounded-2xl overflow-hidden group pr-6"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Overlay Buttons */}
                                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.a
                                        href={project.liveUrl}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                        aria-label="ライブデモを見る"
                                    >
                                        <Eye size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                        aria-label="GitHubを見る"
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                </div>

                                {project.featured && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 pr-8">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-dark-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.liveUrl}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        <span className="text-sm font-medium">ライブデモ</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-2 text-dark-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        <span className="text-sm font-medium">GitHub</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold transition-all duration-300"
                    >
                        もっと見る
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects