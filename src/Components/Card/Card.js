import React from 'react'
import './Card.css'
import favorite from '../../images/favoriteIcon.svg';
import isNotFavorite from '../../images/isNotFavorite.svg';

const Card = ({id, name, street, city, state, phone, toggleStateSearchFaves}) => {
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