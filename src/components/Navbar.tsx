import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-xl font-light tracking-wider gradient-text"
                whileHover={{ opacity: 0.7 }}
              >
                RIKUTO
              </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="nav-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
