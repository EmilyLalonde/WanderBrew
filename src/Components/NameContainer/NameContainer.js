import React from 'react'
import './NameContainer.css'
import Card from '../Card/Card'

const NameContainer = ({nameSearch}) => {
  let searchResults = nameSearch.map(nameObj => {
      return <Card 
      name={nameObj.name}
      street={nameObj.street} 
      city={nameObj.city}
      state={nameObj.state}
      phone={nameObj.phone}
      key={nameObj.id}

      />
  })
  return (
    <div>
      {searchResults}
    </div>
  )
}

export default NameContainer