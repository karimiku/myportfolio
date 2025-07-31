import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-dark-800/50 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left mb-6 md:mb-0"
                    >
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-6"
                    >


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
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer