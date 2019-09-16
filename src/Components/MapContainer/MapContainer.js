import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import { getBreweriesByState, getBreweriesByName } from "../../apiCalls/apiCalls";
import { apiKey } from '../../apiCalls/apiKey.js'
import './MapContainer.css'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      state: '',
      name: '',
      stateSearch: [],
      nameSearch: [],
      error: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitState = async () => {
    this.setState({ stateSearch: [] });
    this.setState({ state: "" });
    try {
      const stateSearch = await getBreweriesByState(this.state.state);
      this.setState({ stateSearch });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  handleSubmitName = async () => {
    this.setState({ stateSearch: [] });
    this.setState({ name: "" });
    try {
      const nameSearch = await getBreweriesByName(this.state.name)
      this.setState({ nameSearch })
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  displayMarkersState = () => {
    // console.log('this.state.stateSearch', this.state.stateSearch)
    return this.state.stateSearch.map((brewery, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: brewery.latitude,
            lng: brewery.longitude
          }}
          onClick={() => console.log(`${brewery.name}`)}
        />
      );
    });
  };
  
  displayMarkersName = () => {
    console.log('this.state.nameSearch', this.state.nameSearch)
    return this.state.nameSearch.map((brewery, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: brewery.latitude,
            lng: brewery.longitude
          }}
          label={`${brewery.name}`}
          onClick={() => console.log(`${brewery.name}`)}
        />
      );
    });
  };

  render() {
    console.log(this.state.stateSearch)
    return (
      <div>
        <div className="map-state-search">
        <input
          type="text"
          placeholder="Search for a State..."
          name="state"
          className="search-map"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <button className="map-search-button" onClick={this.handleSubmitState}>
          Submit
        </button>
        </div>
        <div className="map-name-search">
        <input
          type="text"
          placeholder="Search for a name..."
          name="name"
          className="search-map"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="map-search-button" onClick={this.handleSubmitName}>
          Submit
        </button>
        </div>
        <div className = "map">
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 39.8097343, lng: -98.5556199 }}
          // style={{height: '80%', width: '100%'}}
        >
          {this.displayMarkersState()}
          {this.displayMarkersName()}
        </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);
