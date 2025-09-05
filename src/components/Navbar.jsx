import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'
import { motion } from 'framer-motion' // used for smooth underline animation

const Navbar = () => {
    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Projects', to: '/projects' },
        { name: 'Resume', to: '/resume' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 90) // adjust threshold
            console.log('scrollY =', window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // --- underline animation state & refs ---
    const navRef = useRef(null)
    const itemRefs = useRef([]) // will hold each nav item's DOM node
    const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
    const [activeIndex, setActiveIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname || '/'
            const idx = navigation.findIndex((n) => (n.to === '/' ? path === '/' : path.startsWith(n.to)))
            return idx === -1 ? 0 : idx
        }
        return 0
    })

    // helper to measure and update indicator based on index
    const updateIndicator = (index) => {
        if (!navRef.current || !itemRefs.current[index]) {
            setIndicator((s) => ({ ...s, opacity: 0 }))
            return
        }
        const navRect = navRef.current.getBoundingClientRect()
        const itemRect = itemRefs.current[index].getBoundingClientRect()

        // compute an underline width that's visually pleasing: not full text width, but centered
        const desiredWidth = Math.max(36, Math.round(itemRect.width * 0.68))
        const left = Math.round(itemRect.left - navRect.left + (itemRect.width - desiredWidth) / 2)

        setIndicator({ left, width: desiredWidth, opacity: 1 })
    }

    // Measure *synchronously* on mount so the underline starts in the correct place (no jump)
    useLayoutEffect(() => {
        updateIndicator(activeIndex)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // update on mount and whenever activeIndex changes (e.g., on click)
    useEffect(() => {
        const id = requestAnimationFrame(() => updateIndicator(activeIndex))
        return () => cancelAnimationFrame(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])

    // update on window resize so underline stays aligned
    useEffect(() => {
        const onResize = () => updateIndicator(activeIndex)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])

    // keep indicator in sync with history navigation (back/forward)
    useEffect(() => {
        const handlePop = () => {
            const path = window.location.pathname || '/'
            const idx = navigation.findIndex((n) => (n.to === '/' ? path === '/' : path.startsWith(n.to)))
            setActiveIndex(idx === -1 ? 0 : idx)
        }
        window.addEventListener('popstate', handlePop)
        return () => window.removeEventListener('popstate', handlePop)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // helper: check active by current pathname fallback
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    const isActive = (to) => {
        if (to === '/') return currentPath === '/'
        return currentPath.startsWith(to)
    }

    return (
        <div
            className={`
                fixed inset-x-0 top-0 z-50 transition-all duration-300
                ${isScrolled ? 'backdrop-blur-md bg-white/10 shadow-sm' : 'bg-transparent'}
            `}
        >
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">

                {/* Logo */}
                <div className="flex lg:flex-1">
                    <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 text-6xl font-extrabold drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                        JK
                    </h1>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Desktop Nav */}
                <div ref={navRef} className="hidden lg:flex lg:gap-x-12 relative">
                    {navigation.map((item, idx) => {
                        const active = isActive(item.to)
                        return (
                            <Link
                                key={item.name}
                                to={item.to}
                                // on click: update activeIndex immediately so the underline starts moving while routing occurs
                                onClick={() => {
                                    setActiveIndex(idx)
                                    // schedule measurement slightly after setActiveIndex to ensure DOM refs exist
                                    requestAnimationFrame(() => updateIndicator(idx))
                                }}
                                ref={(el) => (itemRefs.current[idx] = el)}
                                className={`block text-lg font-medium relative ${
                                    item.name === 'Home'
                                        ? 'text-purple-500 hover:drop-shadow-[0_0_10px_rgba(34,211,238,1.8)]'
                                        : 'text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,1.8)]'
                                }`}
                            >
                                {/* label */}
                                <span className="relative z-10">{item.name}</span>

                                {/* aria-hidden placeholder element kept for screenreaders parity (animated indicator is separate) */}
                                <span aria-hidden="true" className="sr-only" />
                            </Link>
                        )
                    })}

                    {/* Animated sliding indicator - initial={false} prevents reset jump */}
                    <motion.span
                        className="absolute bottom-0 rounded-full z-0 pointer-events-none"
                        aria-hidden="true"
                        initial={false}
                        animate={{
                            left: indicator.left,
                            width: indicator.width,
                            opacity: indicator.opacity,
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                        style={{
                            height: 4,
                            // subtle gradient matching theme and slight glow
                            background: 'linear-gradient(90deg, rgba(124,58,237,1), rgba(6,182,212,1))',
                            boxShadow: '0 8px 20px rgba(34,211,238,0.08)',
                            bottom: -10, // offset below text - matches your requested offset
                        }}
                    />
                </div>

                {/* Call to Action */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href={`mailto:johnkassah23@gmail.com`} 
                        className="inline-block px-6 py-2 rounded-full text-slate-950 bg-cyan-600 font-semibold hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] transition duration-300"
                    >
                        Hire Me
                    </a>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-slate-950 bg-opacity-95 p-6 right-0 left-[55%]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-extrabold text-cyan-400">JK</h1>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className={`block text-lg font-medium text-white ${
                                    item.name === 'Home' ? 'hover:text-purple-500' : 'hover:text-cyan-400'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Navbar
