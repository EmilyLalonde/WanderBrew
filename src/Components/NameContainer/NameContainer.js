import React from 'react'
import { connect } from 'react-redux';
import './NameContainer.css'
import Card from '../Card/Card'

const NameContainer = ({nameResults}) => {
  let searchResults = nameResults.map(nameObj => {
      return <Card 
      name={nameObj.name}
      street={nameObj.street} 
      city={nameObj.city}
      state={nameObj.state}
      phone={nameObj.phone}
      key={nameObj.id}
      id={nameObj.id}
      />
  })
  return (
    <div>
      {searchResults}
    </div>
  )
}

const mapStateToProps = state => ({
  nameResults:state.nameResults
})

export default connect(mapStateToProps, null)(NameContainer)