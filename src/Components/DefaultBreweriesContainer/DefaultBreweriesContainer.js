import React from 'react'
import Card from '../Card/Card'

const DefaultBreweriesContainer = ({denverBreweries}) => {
  const denBreweries = denverBreweries.map(brewery => {
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
    <div>
      {denBreweries}
    </div>
  )
}

export default DefaultBreweriesContainer