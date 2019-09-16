import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './NameContainer.css'
import Card from '../../Components/Card/Card'

const NameContainer = ({nameResults}) => {
  let searchResults = nameResults.map(nameObj => {
      return (
      <Link to={`/name-search/${nameObj.id}`} key={nameObj.id}>
      <Card 
      name={nameObj.name}
      street={nameObj.street} 
      city={nameObj.city}
      state={nameObj.state}
      phone={nameObj.phone}
      website={nameObj.website_url}
      key={nameObj.id}
      id={nameObj.id}
      />
      </Link>
      )
  })
  return (
    <div className="name-search-results">
      {searchResults}
    </div>
  )
}

const mapStateToProps = state => ({
  nameResults:state.nameResults
})

export default connect(mapStateToProps, null)(NameContainer)