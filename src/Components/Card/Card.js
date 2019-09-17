import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({name, street, city, state, phone}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-p">{street}</p>
      <p className="card-p">{city}</p>
      <p className="card-p">{state}</p>
      <p className="card-p">{phone}</p>
    </div>
  )
}

export default Card
