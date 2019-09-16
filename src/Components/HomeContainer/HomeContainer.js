import React, { Component } from 'react'
import { getPopularDenverBreweries } from '../../apiCalls/apiCalls'
import './HomeContainer.css'
import DefaultBreweriesContainer from '../DefaultBreweriesContainer/DefaultBreweriesContainer'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      denverBreweries: []
    }
  }

  componentDidMount () {
      getPopularDenverBreweries()
      .then(data => this.setState({denverBreweries: data}))
  }

  render() {
    return (
    <div>
      {/* <h1 className="site-header">WanderBrew</h1> */}
      <DefaultBreweriesContainer denverBreweries={this.state.denverBreweries} />
    </div>
    )
  }
}

export default HomeContainer