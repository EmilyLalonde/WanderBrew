import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToVisited } from '../../actions'
import { NavLink } from 'react-router-dom';
import { getPopularDenverBreweries, getPopularBreweriesNational } from '../../apiCalls/apiCalls'
import "./App.css";
import MapContainer from "../../Components/MapContainer/MapContainer";
import LandingContainer from "../../Components/LandingContainer/LandingContainer"
import StateSearchContainer from "../StateSearchContainer/StateSearchContainer"
import NameSearchContainer from "../NameSearchContainer/NameSearchContainer"
import NavContainer from '../../Components/NavContainer/NavConatiner'
import Card from '../../Components/Card/Card'
import HomeContainer from '../../Components/HomeContainer/HomeContainer'
import ImagesContainer from '../../Components/ImagesContainer/ImagesContainer'
import NotesContainer from '../../Components/NotesConatiner/NotesContainer'


export class App extends Component {
  constructor() {
    super();
    this.state = {
      denverBreweries: [],
      nationalBreweries: [],
      notes: []
    }
    this.addNote = this.addNote.bind(this);
  }

  componentDidMount () {
    getPopularDenverBreweries()
    .then(data => this.setState({denverBreweries: data}))
    getPopularBreweriesNational()
    .then(data => this.setState({nationalBreweries: data}))
}

  addNote (newNote) {
    this.setState({notes: [...this.state.notes, newNote]})
}

//   addToVisited = id => {

// }

  render() {
    const { stateResults, nameResults} = this.props
    return (
      <div className="body">
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
            <HomeContainer denverBreweries={this.state.denverBreweries} nationalBreweries={this.state.nationalBreweries}/>
          </div>
        )}
      />
      <Route
        exact
        path="/state-search"
        render={() => (
          <div>
          <NavContainer />
            <StateSearchContainer addToVisited={this.addToVisited}/>
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
            <div className="map-nav">
            <NavContainer />
            </div>
            <div className="map">
            <MapContainer />
            </div>
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
                  <div className="name-nav">
                  <NavLink to='/' className='Nav'>-- Home --  </NavLink>
                  </div>
                  <Card {...foundState} addToVisited={this.addToVisited}/>
                  <ImagesContainer />
                  <NotesContainer addNote={this.addNote} notes={this.state.notes}/>
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
                  <div className="name-nav">
                  <NavLink to='/' className='Nav'>-- Home --</NavLink>
                  </div>
                  <Card {...foundName} addToVisited={this.addToVisited}/>
                  <ImagesContainer />
                  <NotesContainer addNote={this.addNote} notes={this.state.notes}/>
                </div>
              );
          }} 
        />
        <Route
          path="/home/:id"
          render={({ match }) => {
            const foundDefaultCO = this.state.denverBreweries.find(
              brew => brew.id === parseInt(match.params.id)
            );
            const foundDefaultNat = this.state.nationalBreweries.find(
              brew => brew.id === parseInt(match.params.id)
            );
              return (
                <div>
                  <div className="name-nav">
                  <NavLink to='/' className='Nav'> --Home --</NavLink>
                  </div>
                  <Card {...foundDefaultCO || foundDefaultNat} addToVisited={this.addToVisited}/>
                  <ImagesContainer />
                  <NotesContainer addNote={this.addNote} notes={this.state.notes}/>
                </div>
              );
          }} 
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  stateResults: state.stateResults,
  nameResults: state.nameResults,
  visited: state.visited
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ addToVisited }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
