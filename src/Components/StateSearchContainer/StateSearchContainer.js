import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStateResults } from '../../actions'
import './StateSearchContainer.css'
import { getBreweriesByState } from "../../apiCalls/apiCalls";
import StateContainer from '../StateContainer/StateContainer';

class StateSearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      state: '',
      error: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitState = async () => {
    this.setState({ state: "" });
    const { state } = this.state;
    const { getStateResults } = this.props
    getBreweriesByState(state)
    .then(data => getStateResults(data))
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
        <StateContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stateResults: state.stateResults
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getStateResults }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StateSearchContainer)