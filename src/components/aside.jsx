import React, { useState } from 'react'
import "./component.css"
import DownloadImage from './button'

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='aside'>
        <div className="aside-img">
            <div className="va">
                <div>
                  <img src="/photo.jpg" alt="" />
                </div>
                <div className='br'>
                  <h1>Sancho Dev</h1>
                  <p>Web Devoloper</p>
                </div>
                <div className="burger">
                  <button onClick={() => setIsOpen(!isOpen)}>V</button>
                </div>
            </div>
        </div>
        <div className={`aside-content ${isOpen ? "open" : ""}`}>
            <div className="content-cards">
              <div className="content-card">
              <div className="card-img">
                <img src="/email.png" alt="" />
              </div>
              <div className="card-info">
                <h4>EMAIL</h4>
                <a href="@sanjarkomilov999@gmail.com">sanjarkomilov99..</a>
              </div>
            </div>
            <div className="content-card">
              <div className="card-img">
                <img src="/smartphone.png" alt="" />
              </div>
              <div className="card-info">
                <h4>PHONE</h4>
                <a href="+998886051024">+998886051024.</a>
              </div>
            </div>
            <div className="content-card">
              <div className="card-img">
                <img src="/calendar.png" alt="" />
              </div>
              <div className="card-info">
                <h4>DATE BIRTH</h4>
                <a href="@sanjarkomilov999@gmail.com">24-april2010-year</a>
              </div>
            </div>
            <div className="content-card">
              <div className="card-img">
                <img src="/location.png" alt="" />
              </div>
              <div className="card-info">
                <h4>EMAIL</h4>
                <a href="@sanjarkomilov999@gmail.com">sanjarkomilov99..</a>
              </div>
            </div>
            </div>  
            <div className="content-social">
                <a href="https://www.instagram.com/sancho.dev/">
                  <img src="/instagram.png" alt="" />
                </a>
                <a href="https://github.com/sanchodevv">
                  <img src="/github.png" alt="" />
                </a>
                <a href="https://t.me/sanchodevv">
                  <img src="/telegram1.png" alt="" />
                </a>
            </div>
            <div className="content-cv">
              <DownloadImage />   
            </div>
        </div>
    </div>    
  )
}

export default Aside
