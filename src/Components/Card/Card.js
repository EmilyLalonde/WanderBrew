import React from 'react'
import './Card.css'
import favorite from '../../images/favoriteIcon.svg';
import isNotFavorite from '../../images/isNotFavorite.svg';

export const Card = ({id, name, street, city, state, phone}) => {
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