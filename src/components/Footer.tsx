import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Mail } from 'lucide-react'

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-800/50 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left mb-6 md:mb-0"
                    >
                        <p className="text-sm text-dark-300">
                            © {currentYear} <span className="text-white font-medium">Rikuto</span>. Built with React, Vite, and Tailwind CSS.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-6"
                    >
                        <motion.a
                            href="https://github.com/karimiku"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-3 glass-effect rounded-full text-dark-300 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-3 glass-effect rounded-full text-dark-300 hover:text-white transition-colors duration-300"
                            aria-label="Contact"
                        >
                            <Mail size={20} />
                        </motion.a>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full text-white hover:shadow-lg transition-all duration-300"
                            aria-label="トップに戻る"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-dark-700 text-center"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-dark-400">
                        <a href="#about" className="hover:text-white transition-colors">プロフィール</a>
                        <span className="text-dark-600">•</span>
                        <a href="#experience" className="hover:text-white transition-colors">経歴</a>
                        <span className="text-dark-600">•</span>
                        <a href="#skills" className="hover:text-white transition-colors">スキル</a>
                        <span className="text-dark-600">•</span>
                        <a href="#projects" className="hover:text-white transition-colors">プロジェクト</a>
                        <span className="text-dark-600">•</span>
                        <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer