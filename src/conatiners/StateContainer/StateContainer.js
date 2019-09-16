import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './StateContainer.css'
import Card from '../../Components/Card/Card'

const StateContainer = ({ stateResults }) => {
  let searchResults = stateResults.map(stateObj => {
      return (
      <Link to={`/state-search/${stateObj.id}`} key={stateObj.id}>
      <Card 
      name={stateObj.name}
      street={stateObj.street} 
      city={stateObj.city}
      state={stateObj.state}
      phone={stateObj.phone}
      key={stateObj.id}
      id={stateObj.id}
      />
      </Link>
      )
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