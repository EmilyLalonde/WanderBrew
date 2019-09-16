import React from 'react'
import './HomeContainer.css'
import DefaultBreweriesContainer from '../DefaultBreweriesContainer/DefaultBreweriesContainer'

const HomeContainer = ({denverBreweries, nationalBreweries}) => {
    return (
    <div>
      <h3>Featured Denver Breweries</h3>
      <DefaultBreweriesContainer breweries={denverBreweries}/>
      <h3>Featured National Breweries</h3>
      <DefaultBreweriesContainer breweries={nationalBreweries}/>
    </div>
    )
}

export default HomeContainer