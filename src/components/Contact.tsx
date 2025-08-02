import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github } from 'lucide-react'
import type { FormData, ContactInfo, SocialLink } from '../types'
import { contactConfig } from '../config/contact'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Netlify Forms または EmailJS を使用した実際の送信処理
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }).toString()
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('送信に失敗しました')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo: ContactInfo[] = [
        {
            icon: Mail,
            label: 'メール',
            value: contactConfig.displayEmail,
            href: `mailto:${contactConfig.displayEmail}`
        },
        {
            icon: MapPin,
            label: '所在地',
            value: contactConfig.location,
            href: '#'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/karimiku',
            href: contactConfig.github
        }
    ]

    const socialLinks: SocialLink[] = [
        { icon: Github, href: contactConfig.github, label: 'GitHub' },
        { icon: Mail, href: `mailto:${contactConfig.displayEmail}`, label: 'Email' },
        { icon: MapPin, href: '#', label: 'Location' }
    ]

    return (
        <section id="contact" className="py-20">
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
                        <form onSubmit={handleSubmit} className="space-y-6" name="contact" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
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
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitting
                                    ? 'bg-dark-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>送信中...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>送信する</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                                >
                                    ✅ メッセージを送信しました！ありがとうございます。
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                                >
                                    ❌ 送信に失敗しました。もう一度お試しください。
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact