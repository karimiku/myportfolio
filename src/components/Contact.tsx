import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import type { ContactInfo, SocialLink } from '../types'

const Contact: FC = () => {

    const contactInfo: ContactInfo[] = [
        {
            icon: Mail,
            label: 'メール',
            value: 'contact@rikuto-portfolio.com',
            href: 'mailto:contact@rikuto-portfolio.com'
        },
        {
            icon: Phone,
            label: '電話',
            value: '非公開',
            href: '#'
        },
        {
            icon: MapPin,
            label: '所在地',
            value: 'Tokyo, Japan',
            href: '#'
        }
    ]

    const socialLinks: SocialLink[] = [
        { icon: Github, href: 'https://github.com/karimiku', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://x.com/', label: 'Twitter' }
    ]

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        <span className="gradient-text">お問い合わせ</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
                        プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください。
                    </p>
                </motion.div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-2xl space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-900">連絡先</h3>
                        <p className="text-slate-600">
                            お急ぎのご連絡は以下の連絡先からお願いいたします。
                        </p>
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="flex items-center space-x-4 p-4 bg-white/80 rounded-xl hover:bg-white transition-all duration-300 group shadow-sm"
                                >
                                    <div className="p-3 bg-gradient-to-r from-sky-400 to-purple-400 rounded-lg group-hover:scale-110 transition-transform text-white">
                                        <info.icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm">{info.label}</p>
                                        <p className="text-slate-800 font-medium">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">SNS</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-gradient-to-r from-sky-500/15 to-purple-500/15 rounded-xl border border-sky-300/40 hover:border-sky-400 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} className="text-sky-600 group-hover:text-slate-900 transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
