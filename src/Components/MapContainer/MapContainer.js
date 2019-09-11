import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return <Marker key={index} id={index} position={{
  //      lat: store.latitude,
  //      lng: store.longitude
  //    }}
  //    onClick={() => console.log("You clicked me!")} />
  //   })
  // }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={5}
          // style={mapStyles}
          initialCenter={{ lat: 39.8097343, lng: -98.5556199}}
        >
          {/* {this.displayMarkers()} */}
        </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChtQFPq3hEKIFERjREFsNVdyFdV1CxkhE'
})(MapContainer);