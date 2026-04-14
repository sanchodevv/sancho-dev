import React from 'react'
import './about.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
    >

         <section className="about">
        <motion.div className="about-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
          <h1>About Me</h1>
          <p>
              Hello everyone! I'm Sancho. My fullname is Komilov
              Sultonsanjar. I'm 15 years old. I'm currently studying
              at 52-school in Khorezm. <br /> <br /> Now I studying in
              IT Park Khorezm. I learned Frontend Programming in IT
              Park. My teacher's name is Shohruh Abdullayev. He is a
              very good teacher. I like programming very much. My
              hobbies are playing football, playing chess and reading
              books. My favorite book is "Rich Dad Poor Dad" by Robert
              Kiyosaki.
          </p>
        </motion.div>
        <div className='about__doing'>
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            >What I'm Doing</motion.h3>
            <motion.div className='doing__cards'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            >
                                    <motion.div className='doing__card'
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    >
                        <img src="/icon-app.svg" alt='' />
                        <div>
                            <h5>Making Edits</h5>
                            <p>
                                My Instagram Accaunt is vey amazing. I
                                edit videos.
                            </p>
                        </div>
                    </motion.div>
                                        <motion.div className='doing__card'
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    >
                        <img src="/icon-app.svg" alt='' />
                        <div>
                            <h5>Making Edits</h5>
                            <p>
                                My Instagram Accaunt is vey amazing. I
                                edit videos.
                            </p>
                        </div>
                    </motion.div>
                                        <motion.div className='doing__card'
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    >
                        <img src="/icon-app.svg" alt='' />
                        <div>
                            <h5>Making Edits</h5>
                            <p>
                                My Instagram Accaunt is vey amazing. I
                                edit videos.
                            </p>
                        </div>
                    </motion.div>
                                        <motion.div className='doing__card'
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    >
                        <img src="/icon-app.svg" alt='' />
                        <div>
                            <h5>Making Edits</h5>
                            <p className='p'>
                                My Instagram Accaunt is vey amazing. I
                                edit videos.
                            </p>
                        </div>
                    </motion.div>
            </motion.div>
        </div>
        <div className="test">
            <h1>Testimonials</h1>
            <div className="test__cards">
            <div className='test__card'>
            <div className="test__img">
            <img src="/test3.jpg" alt='' />
            </div>
            
            <div className='card__info'>
            <h1>Ibrohim</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
            </p>
            </div>
            </div>
            <div className='test__card'>
            <div className="test__img">
            <img src="/test3.jpg" alt='' />
            </div>
            
            <div className='card__info'>
            <h1>Ibrohim</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
            </p>
            </div>
            </div>
            <div className='test__card'>
            <div className="test__img">
            <img src="/test3.jpg" alt='' />
            </div>
            
            <div className='card__info'>
            <h1>Ibrohim</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
            </p>
                    </div>
                    </div>
                    <div className='test__card'>
                    <div className="test__img">
                    <img src="/test3.jpg" alt='' />
                    </div>
                    
                    <div className='card__info'>
                    <h1>Ibrohim</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quod.
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
        <div className="clients">
            <h1>Clients</h1>
            <div className="swiper__imgs">
                <img
                    src='https://api.logobank.uz/media/logos_png/IT_park-01.png'
                    alt=''
                    />
                {/* <img src="https://online.mbos.uz/admin/mbos.png" alt="" /> */}
                <img src="/404.png" alt="" />
                <img src="/404.png" alt="" />
                <img src="/404.png" alt="" />
                <img src="/404.png" alt="" />
            </div>
        </div>
         </section>
    </motion.div>
  )
}

export default About
