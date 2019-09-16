import React from 'react'
import './Card.css'

const Card = ({name, street, city, state, phone}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{phone}</p>
    </div>
  )
}

export default Card