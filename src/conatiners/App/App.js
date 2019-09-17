import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getPopularDenverBreweries, getPopularBreweriesNational } from '../../apiCalls/apiCalls'
import { getDenverBreweries, getNationalBreweries} from '../../actions'
import "./App.css";
import MapContainer from "../../Components/MapContainer/MapContainer";
import StateSearchContainer from "../StateSearchContainer/StateSearchContainer"
import NameSearchContainer from "../NameSearchContainer/NameSearchContainer"
import NavContainer from '../../Components/NavContainer/NavConatiner'
import Card from '../../Components/Card/Card'
import HomeContainer from '../../conatiners/HomeContainer/HomeContainer'
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
    const { getDenverBreweries, getNationalBreweries} = this.props
    getPopularDenverBreweries()
    .then(data => getDenverBreweries(data))
    getPopularBreweriesNational()
    .then(data => getNationalBreweries(data))
}

  addNote (newNote) {
    this.setState({notes: [...this.state.notes, newNote]})
} 

  render() {
    const { stateResults, nameResults} = this.props
    return (
      <div>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <NavContainer />
            <HomeContainer/>
          </div>
        )}
      />
      <Route
        exact
        path="/state-search"
        render={() => (
          <div>
          <NavContainer />
            <StateSearchContainer/>
          </div>
        )}
      />
      <Route
        exact
        path="/name-search"
        render={() => (
          <div>
            <NavContainer />
            <NameSearchContainer/>
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
                  <Card {...foundState}/>
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
                  <Card {...foundName}/>
                  <ImagesContainer />
                  <NotesContainer addNote={this.addNote} notes={this.state.notes}/>
                </div>
              );
          }} 
        />
        <Route
          path="/home/:id"
          render={({ match }) => {
            const foundDefaultCO = this.props.getDenverBreweries.find(
              brew => brew.id === parseInt(match.params.id)
            );
            const foundDefaultNat = this.props.getNationalBreweries.find(
              brew => brew.id === parseInt(match.params.id)
            );
              return (
                <div>
                  <div className="name-nav">
                  <NavLink to='/' className='Nav'> --Home --</NavLink>
                  </div>
                  <Card {...foundDefaultCO || foundDefaultNat}/>
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
  denverResults: state.denverResults,
  nationalResults: state.nationalResults
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getDenverBreweries, getNationalBreweries}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
