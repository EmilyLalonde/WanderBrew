import React from 'react'
import { connect } from 'react-redux';
import './StateContainer.css'
import Card from '../Card/Card'

const StateContainer = ({stateResults}) => {
  let searchResults = stateResults.map(stateObj => {
      return <Card 
      name={stateObj.name}
      street={stateObj.street} 
      city={stateObj.city}
      state={stateObj.state}
      phone={stateObj.phone}
      key={stateObj.id}
      />
  })
  return (
    <div>
      {searchResults}
    </div>
  )
}

const mapStateToProps = state => ({
  stateResults:state.stateResults
})

export default connect(mapStateToProps, null)(StateContainer)