import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, href: "https://gh.linkedin.com/in/john-kassah-best-choice?trk=people-guest_people_search-card", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaInstagram />, href: "https://instagram.com/j.kassah?igsh=MTk2bTVjbTQ5dWFvZA==", label: "Instagram" },
    { icon: <FaGithub />, href: "https://github.com/John-Kassah", label: "GitHub" },
];

// Container animation for stagger
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15,
        },
    },
};

// Each icon's animation
const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        },
    },
};

export default function Socials() {
    return (
        <motion.div
            className="flex space-x-4 mt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
    
            {socials.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={iconVariants}
                    className="
                        p-3 rounded-full bg-white/5 
                        hover:bg-indigo-900 
                        transition-colors duration-300 
                        text-white text-xl 
                        drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] 
                        hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]
                    "
                >
                    {social.icon}
                </motion.a>
            ))}
        </motion.div>
    );
}
