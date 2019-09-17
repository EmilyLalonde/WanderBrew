import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStateResults } from "../../actions";
import "./StateSearchContainer.css";
import { getBreweriesByState } from "../../apiCalls/apiCalls";
import StateContainer from "../StateContainer/StateContainer";

export class StateSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      error: "",
      favorites: []
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitState = async () => {
    this.setState({ state: "" });
    const { state } = this.state;
    const { getStateResults } = this.props;
    getBreweriesByState(state).then(data => getStateResults(data));
  };

  render() {
    return (
      <main className="state-main">
        <div className="state-input-container">
          <input
            type="text"
            placeholder="Search for a State..."
            name="state"
            className="search"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <button className="search-button" disabled={!this.state.state} onClick={this.handleSubmitState}>
            Submit
          </button>
        </div>
        <div className="state-search-container">
          <StateContainer />
          <h4>^ Search for Breweries by State ^</h4>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  stateResults: state.stateResults
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getStateResults }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateSearchContainer);
