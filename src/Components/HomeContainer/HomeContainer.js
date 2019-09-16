import React, { Component } from 'react'
import { getPopularDenverBreweries, getPopularBreweriesNational } from '../../apiCalls/apiCalls'
import './HomeContainer.css'
import DefaultBreweriesContainer from '../DefaultBreweriesContainer/DefaultBreweriesContainer'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      denverBreweries: [],
      nationalBreweries: []
    }
  }

  componentDidMount () {
      getPopularDenverBreweries()
      .then(data => this.setState({denverBreweries: data}))
      getPopularBreweriesNational()
      .then(data => this.setState({nationalBreweries: data}))
  }

  render() {
    return (
    <div>
      <DefaultBreweriesContainer breweries={this.state.denverBreweries}/>
      <DefaultBreweriesContainer breweries={this.state.nationalBreweries}/>
    </div>
    )
  }
}

export default HomeContainer