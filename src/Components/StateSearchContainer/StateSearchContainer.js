import React, { Component } from 'react'
import './StateSearchContainer.css'
import { getBreweriesByState } from "../../apiCalls/apiCalls";
import StateContainer from '../StateContainer/StateContainer';

class StateSearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      state: '',
      name: '',
      stateSearch: [],
      nameSearch: [],
      error: ''
    }
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

  render() {
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
        <button className="search-button" onClick={this.handleSubmitState}>
          Submit
        </button>
        <StateContainer stateSearch={this.state.stateSearch}/>
      </div>
    )
  }
}

export default StateSearchContainer