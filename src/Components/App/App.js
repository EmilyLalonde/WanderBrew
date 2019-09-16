import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToVisited } from '../../actions/'
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";
import LandingContainer from "../LandingContainer/LandingContainer"
import StateSearchContainer from "../../conatiners/StateSearchContainer/StateSearchContainer"
import NameSearchContainer from "../../conatiners/NameSearchContainer/NameSearchContainer"
import NavContainer from '../NavContainer/NavConatiner'
import Card from '../Card/Card'
import HomeContainer from '../HomeContainer/HomeContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

//   addToVisited = id => {

// }

  render() {
    const { stateResults, nameResults} = this.props
    console.log(stateResults)
    return (
      <div>
      <Route
        exact
        path="/landing"
        render={() => (
          <div>
            <LandingContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <NavContainer />
            <HomeContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/state-search"
        render={() => (
          <div>
          <NavContainer />
            <main  class="name-container">
            <StateSearchContainer addToVisited={this.addToVisited}/>
          </main>
          </div>
        )}
      />
      <Route
        exact
        path="/name-search"
        render={() => (
          <div>
            <NavContainer />
            <NameSearchContainer addToVisited={this.addToVisited}/>
          </div>
        )}
      />
      <Route
        exact
        path="/map"
        render={() => (
          <div>
            <NavContainer />
            <MapContainer />
          </div>
        )}
      />
      <Route
          path="/state-search/:id"
          render={({ match }) => {
            const foundState = stateResults.find(
              state => state.id === parseInt(match.params.id)
            );
              return (
                <div>
                  <Card {...foundState} addToVisited={this.addToVisited}/>
                </div>
              );
          }} 
        />
        <Route
          path="/name-search/:id"
          render={({ match }) => {
            const foundName = nameResults.find(
              name => name.id === parseInt(match.params.id)
            );
              return (
                <div>
                  <Card {...foundName} addToVisited={this.addToVisited}/>
                </div>
              );
          }} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateResults: state.stateResults,
  nameResults: state.nameResults,
  visited: state.visited
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addToVisited }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
