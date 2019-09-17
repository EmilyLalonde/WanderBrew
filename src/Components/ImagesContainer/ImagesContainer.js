import React from 'react'
import './ImagesContainer.css'
import { beerImages } from '../../imageData'

const ImagesContainer = () => {
  let img = beerImages
  return (
    <div className="image">
      <img src={img[Math.floor(Math.random() * Math.floor(26))].img} alt='' />
    </div>
  )
}

export default ImagesContainer