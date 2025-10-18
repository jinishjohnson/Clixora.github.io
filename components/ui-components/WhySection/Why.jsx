
import React from 'react'
import Title from '../Title/Title'
import './Why.css'

const cardsData = [
    {
        id: 1,
        title: "Quality Service",
        description: "We provide top-notch quality service to ensure customer satisfaction."
    },
    {
        id: 2,
        title: "Expert Team",
        description: "Our team consists of experienced professionals dedicated to excellence."
    },
    {
        id: 3,
        title: "24/7 Support",
        description: "Round-the-clock customer support to assist you whenever you need."
    },
    {
        id: 4,
        title: "Affordable Pricing",
        description: "Competitive pricing without compromising on quality."
    },
    {
        id: 5,
        title: "Fast Delivery",
        description: "Quick and efficient delivery to meet your deadlines and expectations."
    },
    {
        id: 6,
        title: "Innovation Driven",
        description: "Cutting-edge solutions powered by the latest technology and innovation."
    }
];

export const WhySection = (props) => { 
    return (
        <div className='section-container'>
           <div className="card-body">
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-text"> 
                {props.description}
            </div>

           </div>
        </div>
    )
}

const Why = () => {
  return (
    <div className='why-section'>
        <Title title="Why Choose Us" subtitle="WHY WE ARE BEST" description="We are a team of passionate developers and designers who love to build beautiful and functional web applications. Our mission is to help businesses and individuals bring their ideas to life.

" />
        <div className='cards-wrapper'>
            {cardsData.map(card => (
                <WhySection key={card.id} title={card.title} description={card.description} />
            ))}
        </div>
    </div>
  )
}

export default Why
