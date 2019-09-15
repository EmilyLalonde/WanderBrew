import React from 'react'
import './StateContainer.css'
import Card from '../Card/Card'

const StateContainer = ({stateSearch}) => {
  let searchResults = stateSearch.map(stateObj => {
      return <Card 
      name={stateObj.name}
      street={stateObj.street} 
      city={stateObj.city}
      state={stateObj.state}
      phone={stateObj.phone}
      key={stateObj.id}
      key={stateObj.id}/>
  })
  return (
    <div>
      {searchResults}
    </div>
  )
}

export default StateContainer