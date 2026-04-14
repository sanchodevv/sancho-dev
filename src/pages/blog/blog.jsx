import React from 'react'
import './blog.css'
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section className="blog"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      <motion.div className="blog-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <h1>Blog</h1>
      </motion.div>
      <motion.div className="blog__cards"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        >
            <img src="/blog1.jpg" alt="" />
            <h5>It Park | Aug 28, 2025 </h5>
            <h2>Get Certifiticate by It Park</h2>
            <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        >
            <img src="/blog2.jpg" alt="" />
            <h5>Meta | May 31, 2025 </h5>
            <h2>Get Certifiticate by Meta</h2>
            <p>This day i get my meta frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        >
            <img src="/scrimba.jpg" alt="" />
            <h5>Scrimba | Jan 23, 2026 </h5>
            <h2>Get Certifiticate by Scrimba</h2>
            <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        >
            <img src="/soon.jpg" alt="" />
            <h5>It Park | May 31, 2025 </h5>
            <h2>Get Certifiticate by It</h2>
            <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        >
            <img src="/soon.jpg" alt="" />
            <h5>It Park | May 31, 2025 </h5>
            <h2>Get Certifiticate by It</h2>
            <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
        <motion.div className="blog__card"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        >
            <img src="/soon.jpg" alt="" />
            <h5>It Park | May 31, 2025 </h5>
            <h2>Get Certifiticate by It</h2>
            <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Blog
