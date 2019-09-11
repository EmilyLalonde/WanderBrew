import React, { Component } from 'react';
import './App.css';
import MapContainer from '../MapContainer/MapContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
    <div>
      <MapContainer />
    </div>)
  }
}

export default App;
