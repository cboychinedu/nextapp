'use client'
import Image from 'next/image'
import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import img from "./Images/img1.jpg"

const Home = () => {
  return (
    <div className="mainDiv">
      <div className="textDiv"> 
        <header> <h1> Dogs </h1> </header> 


      <Fade left>
        <p className="text"> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </Fade>

        <div className="readMoreAndContact"> 
          <button className="readMore"> Read more </button>
          <button className="contactBtn" onClick={() => {
            window.location.href = "/contact"; 
          }}> Contact </button>
        </div>
      </div>

      <Zoom right duration={1000} delay={1000}>
        <div> 
          <Image src={img} className="image"/> 
        </div>
      </Zoom>

    </div>
  )
}

export default Home

