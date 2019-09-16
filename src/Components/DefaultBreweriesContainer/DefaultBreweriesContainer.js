import React from 'react'
import Card from '../Card/Card'
import './DefaultBreweriesContainer.css'

const DefaultBreweriesContainer = ({breweries}) => {
  const denBreweries = breweries.map(brewery => {
    return <Card 
      name={brewery.name}
      street={brewery.street} 
      city={brewery.city}
      state={brewery.state}
      phone={brewery.phone}
      key={brewery.id}
      id={brewery.id}
    />
  })
  return (
    <main class="default-page">
      {denBreweries}
    </main>
  )
}

export default DefaultBreweriesContainer