import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import './DefaultBreweriesContainer.css'

const DefaultBreweriesContainer = ({breweries}) => {
  const denBreweries = breweries.map(brewery => {
    return (
      <Link to={`/home/${brewery.id}`} key={brewery.id}>
    <Card 
      name={brewery.name}
      street={brewery.street} 
      city={brewery.city}
      state={brewery.state}
      phone={brewery.phone}
      key={brewery.id}
      id={brewery.id}
    />
    </Link>
    )
  })
  return (
    <main className="default-page">
      {denBreweries}
    </main>
  )
}

export default DefaultBreweriesContainer