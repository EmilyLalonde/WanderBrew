import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";
import LandingContainer from "../LandingContainer/LandingContainer"
import StateSearchContainer from "../StateSearchContainer/StateSearchContainer"
import NameSearchContainer from "../NameSearchContainer/NameSearchContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
        path="/statesearch"
        render={() => (
          <div>
            <StateSearchContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/namesearch"
        render={() => (
          <div>
            <NameSearchContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/map"
        render={() => (
          <div>
            <MapContainer />
          </div>
        )}
      />
      </div>
    );
  }
}

export default App;
