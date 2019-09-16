import React from 'react'

const Card = ({name, street, city, state, phone}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{phone}</p>
    </div>
  )
}

export default Card