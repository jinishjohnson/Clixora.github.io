import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
       
       <div className='card-content'>
        <img className='card-img' src={props.img} alt={props.title} />
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-description'>{props.description}</p>
        <a href={props.link} target='_blank' rel='noreferrer' className='card-button'>{props.buttonText}</a>
       </div>
        
    </div>
  )
}

export default Card