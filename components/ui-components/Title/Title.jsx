import React from 'react'
import './Title.css'

const Title = ({ title, subtitle, description }) => {
  return (
    <div className="title">
        <p className='title-subtitle'>{subtitle}</p>
      <h2 className='title-main'>{title}</h2>
      <p className='title-description'>{description}</p>

    </div>
  )
}

export default Title
