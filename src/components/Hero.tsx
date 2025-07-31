import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import TypeWriter from './TypeWriter'
import type { SocialLink } from '../types'

const Hero: React.FC = () => {
    const socialLinks: SocialLink[] = [
        { icon: Github, href: 'https://github.com/karimiku', label: 'GitHub' },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-dark-800/30 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 border border-primary-500/20 shadow-xl hover:border-primary-500/40 transition-all duration-300 max-w-full"
                            style={{
                                boxShadow: '0 0 50px rgba(99, 102, 241, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <motion.div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                />
                                <motion.div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                                />
                                <span className="text-dark-300 text-sm ml-3 font-mono">portfolio.tsx</span>
                            </div>
                            <div className="space-y-3 sm:space-y-4 overflow-visible w-full pr-8">
                                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold italic leading-tight break-words">
                                    <TypeWriter
                                        text="Hello"
                                        delay={500}
                                        speed={120}
                                        className="text-blue-400"
                                    />
                                </div>
                                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold italic leading-tight break-words">
                                    <span className="gradient-text">
                                        <TypeWriter
                                            text="I'm Rikuto"
                                            delay={1500}
                                            speed={80}
                                        />
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold text-center transition-all duration-300 text-sm sm:text-base"
                            >
                                プロジェクトを見る
                            </motion.a>
                            <motion.a
                                href="#about"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 sm:px-8 sm:py-4 glass-effect text-white rounded-full font-semibold text-center border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 text-sm sm:text-base"
                            >
                                詳しく見る
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex justify-center lg:justify-start space-x-6"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className="p-3 glass-effect rounded-full text-dark-300 hover:text-white transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end lg:pl-12 xl:pl-16"
                    >
                        <div className="relative lg:ml-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 p-1"
                            >
                                <div className="w-full h-full rounded-full bg-dark-900"></div>
                            </motion.div>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="../../public/profile-dog.jpg"
                                alt="プロフィール写真"
                                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover glow-box"
                                style={{ objectPosition: '0% 20%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div >

            {/* Scroll Indicator */}
            < motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-dark-400 cursor-pointer"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div >
        </section >
    )
}

export default Hero