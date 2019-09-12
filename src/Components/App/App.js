import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";
import LandingContainer from "../LandingContainer/LandingContainer"

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
