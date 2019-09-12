import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";
import HomeContainer from "../HomeContainer/HomeContainer"

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
        path="/"
        render={() => (
          <div>
            <HomeContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/map"
        render={() => (
          <div>
            <MapContainer alabama={this.state.alabama} />
          </div>
        )}
      />
      </div>
    );
  }
}

export default App;
