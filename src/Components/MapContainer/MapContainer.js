import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import { getBreweriesByState } from "../../apiCalls/apiCalls";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      state: '',
      array: [],
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit() {
    this.setState({ array: [] });
    this.setState({ state: "" });
    try {
      const array = await getBreweriesByState(this.state.state);
      this.setState({ array });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }
  displayMarkers = () => {
    // console.log('this.state.array', this.state.array)
    return this.state.array.map((brewery, index) => {
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

  render() {
    console.log(this.state.array)
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a State..."
          name="state"
          className="search"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleSubmit}>
          Submit
        </button>
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 39.8097343, lng: -98.5556199 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyChtQFPq3hEKIFERjREFsNVdyFdV1CxkhE"
})(MapContainer);
