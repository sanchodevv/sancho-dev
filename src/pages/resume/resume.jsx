import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-info">
        <h1>Resume</h1>
      </div>
      <div className="education">
        <div className="edu-title">
          <div className="title-logo">
            <img src="/open-book.png" alt="" />
          </div>
          <div className="title-info">
            <h2>Education</h2>
          </div> 
        </div>
        <div className="edu-info">
          <div className="edu-info-item">
            <div className="item-check"></div>
            <div className="item-info">
              <h3>Hight School</h3>
              <p>2017 - 2028</p>
            </div>
          </div>
          <div className="edu-info-item">
            <div className="item-check"></div>
            <div className="item-info">
              <h3>IT Park Khorezm</h3>
              <p>2024 - 2026</p>
            </div>
          </div>
          <div className="edu-info-item">
            <div className="item-check"></div>
            <div className="item-info">
              <h3>The Intelectuals</h3>
              <p>2025 - 2027</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>My Skills</h1>
        <div className="skill__content">
            <div className="html">
                <h3>HTML</h3>
                <div className="uno">
                    <span></span>
                    <p>95%</p>
                </div>
            </div>
            <div className="css">
                <h3>CSS</h3>
                <div className="uno">
                    <span></span>
                    <p>75%</p>
                </div>
            </div>
            <div className="js">    
                <h3>JavaScript</h3>
                <div className="uno">
                    <span></span>
                    <p>60%</p>
                </div>
            </div>
            <div className="react">
                <h3>React</h3>
                <div className="uno">
                    <span></span>
                    <p>50%</p>
                </div>
            </div>
            <div className="figma">
                <h3>Figma</h3>
                <div className="uno">
                    <span></span>
                    <p>65%</p>
                </div>
            </div>
            <div className="typescript">
                <h3>TypeScript</h3>
                <div className="uno">
                    <span></span>
                    <p>35%</p>
                </div>
            </div>
           
            <div className="bootstrap">
                <h3>Bootstrap</h3>
                <div className="uno">
                    <span></span>
                    <p>65%</p>
                </div>
            </div>
            
            <div className="github">
                <h3>GitHub</h3>
                <div className="uno">
                    <span></span>
                    <p>75%</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
