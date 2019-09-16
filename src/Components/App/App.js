import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";
import LandingContainer from "../LandingContainer/LandingContainer"
import StateSearchContainer from "../StateSearchContainer/StateSearchContainer"
import NameSearchContainer from "../NameSearchContainer/NameSearchContainer"
import NavContainer from '../NavContainer/NavConatiner'
import StateContainer from '../StateContainer/StateContainer'
import Card from '../Card/Card'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
        path="/state-search"
        render={() => (
          <div>
            <NavContainer />
            <StateSearchContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/name-search"
        render={() => (
          <div>
            <NavContainer />
            <NameSearchContainer />
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
            console.log('stateResultsFind', stateResults)
            const foundState = stateResults.find(
              state => state.id === parseInt(match.params.id)
            );
              return (
                <div>
                  <Card {...foundState}/>
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
  nameResults: state.nameResults
})

export default connect(mapStateToProps, null)(App);
