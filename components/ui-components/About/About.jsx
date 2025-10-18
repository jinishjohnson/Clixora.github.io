import React from 'react'
import './About.css'
import Image from 'next/image'


const About = () => {
  return (
    <div className="about">
      <div className='about-content'>
        <h1 className="about-title">About Us</h1>
        <p className="about-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          exercitationem, quibusdam, quos, voluptatibus quidem voluptate
          consequatur doloremque voluptatum quas molestias voluptates. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Natus
          exercitationem, quibusdam, quos, voluptatibus quidem voluptate
          consequatur doloremque voluptatum quas molestias voluptates.
        </p>
        <button className="about-cta">Read More</button>
      </div>
      <div className="about-image">
        <Image src="/assets/abt.png" alt="about" width={350} height={250} />
      </div>
    </div>
  )
}

export default About