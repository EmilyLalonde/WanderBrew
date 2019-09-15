import React, { Component } from 'react'
import './NameSearchContainer.css'
import { getBreweriesByName } from "../../apiCalls/apiCalls";
import NameContainer from '../NameContainer/NameContainer';

class NameSearchContainer extends Component {
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

  render() {
    return (
        <div>
        <input
          type="text"
          placeholder="Search for a name..."
          name="name"
          className="search"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleSubmitName}>
          Submit
        </button>
        <NameContainer nameSearch={this.state.nameSearch}/>
      </div>
    )
  }
}

export default NameSearchContainer