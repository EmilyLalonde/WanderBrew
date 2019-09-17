import React from 'react'
import { connect } from 'react-redux';
import './HomeContainer.css'
import DefaultBreweriesContainer from '../../Components/DefaultBreweriesContainer/DefaultBreweriesContainer'

export const HomeContainer = (props) => {
    return (
    <div>
      <h3>Featured Denver Breweries</h3>
      <DefaultBreweriesContainer breweries={props.denverResults}/>
      <h3>Featured National Breweries</h3>
      <DefaultBreweriesContainer breweries={props.nationalResults}/>
    </div>
    )
}

export const mapStateToProps = state => ({
  denverResults: state.denverResults,
  nationalResults: state.nationalResults
})

export default connect(mapStateToProps, null)(HomeContainer)