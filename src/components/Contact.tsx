import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import type { FormData, ContactInfo, SocialLink } from '../types'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // フォーム送信処理をここに実装
        console.log('Form submitted:', formData)
        alert('メッセージを送信しました！ありがとうございます。')
        setFormData({ name: '', email: '', message: '' })
    }

    const contactInfo: ContactInfo[] = [
        {
            icon: Mail,
            label: 'メール',
            value: '[メールアドレス]',
            href: 'mailto:[メールアドレス]'
        },
        {
            icon: Phone,
            label: '電話',
            value: '[電話番号]',
            href: 'tel:[電話番号]'
        },
        {
            icon: MapPin,
            label: '所在地',
            value: '[所在地]',
            href: '#'
        }
    ]

    const socialLinks: SocialLink[] = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ]

    return (
        <section id="contact" className="py-20 hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                        プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください。
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-effect p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">連絡先</h3>
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
                                        className="flex items-center space-x-4 p-4 bg-dark-800/50 rounded-xl hover:bg-dark-700/50 transition-all duration-300 group"
                                    >
                                        <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                                            <info.icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-dark-400 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="glass-effect p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">SNS</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-4 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} className="text-primary-400 group-hover:text-white transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">メッセージを送る</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-dark-300 text-sm font-medium mb-2">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                                    placeholder="あなたのお名前"
                                />
                            </div>

                            <div>
                                <label className="block text-dark-300 text-sm font-medium mb-2">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-dark-300 text-sm font-medium mb-2">
                                    メッセージ
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                                    placeholder="お気軽にメッセージをお送りください..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                            >
                                <Send size={20} />
                                <span>送信する</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact