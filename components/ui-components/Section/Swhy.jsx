import React from 'react'
import Title from '../Title/Title'
import './Swhy.css'
import Card from '@/components/Card/Card'


const Why = [
  { 
    id: 1,
    subtitle: 'Our Best Solution',
    title: 'WHAT WE OFFER',
    description: 'Want to reach more customers and make more money? Our SEO and digital marketing strategies will put your product or service in the spotlight. We are expert seo company in bengaluru.'

  }
]
const cardData = [
  {
    id: 1,
    icon: '/assets/sm.png',
    title: 'Digital Marketing',
    description: 'We provide top-notch digital marketing services to help your business grow and reach a wider audience.',
    buttonText: "Get Started"
  },
  {
    id: 2,
    icon: '/assets/g.png',
    title: 'Google Ads',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus',
    buttonText: "start campaign" 
  },
  {
    id: 3,
    icon: '/assets/wb.png', 
    title: 'Website Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus',
    buttonText: "Build your website"
  },
]

const Swhy = () => {
  return (
    <div className='w3_container bg-slate-100'>
        <Title title={Why[0].title} subtitle={Why[0].subtitle} description={Why[0].description} />
        <div className='card-container'>
          {cardData.map((card) => (
            <Card key={card.id} img={card.icon} title={card.title} description={card.description} buttonText={card.buttonText} />
          ))}
        </div>
    </div>
  )
}

export default Swhy