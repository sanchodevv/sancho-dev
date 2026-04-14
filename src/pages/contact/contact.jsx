import React from 'react'
import './contact.css'
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section className="contact"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      <motion.div className="contact-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <h1>Contact</h1>
      </motion.div>
      <motion.div className="contact-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div className="map" data-mapbox
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        >
          <figure>
             <iframe
               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.7514774015228!2d60.62081423987571!3d41.558358111458496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1suz!2s!4v1772552982809!5m2!1suz!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
               width='100%'
               height='550'
               loading='lazy'>
             </iframe>
          </figure>
        </motion.div>
          <motion.h1 style={{color:"white", fontSize: "25px"}}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          >Contact Form</motion.h1>
        <motion.div className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="inputs">
            <input type="text" placeholder='Fullname' />
            <input type="email" placeholder='Email Adress' />
          </div>
          <div className="textarea">
            <textarea name="Your massege" style={{width: "100%"}} id="massege" placeholder="Your message"></textarea>
          </div>
          <div className="send-button">
            <button>Send Message</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
export default Contact
