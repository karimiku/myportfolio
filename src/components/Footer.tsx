import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github } from 'lucide-react'

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-700 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <p className="text-sm font-light text-slate-400">
                            © {currentYear} <span className="text-slate-100">Rikuto</span>. All rights reserved.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6"
                    >
                        <motion.a
                            href="https://github.com/karimiku"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, opacity: 0.7 }}
                            className="text-slate-100 transition-opacity"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, opacity: 0.7 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 border border-slate-600 text-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                            aria-label="トップに戻る"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-slate-700"
                >
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-light tracking-wider uppercase text-slate-400">
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <span>•</span>
                        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                        <span>•</span>
                        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                        <span>•</span>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
