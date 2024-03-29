import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNameResults } from '../../actions'
import './NameSearchContainer.css'
import { getBreweriesByName } from "../../apiCalls/apiCalls";
import NameContainer from '../NameContainer/NameContainer';

export class NameSearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      error: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitName = async () => {
    this.setState({ name: "" });
    const { name } = this.state;
    const { getNameResults } = this.props
    getBreweriesByName(name)
    .then(data => getNameResults(data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main className="name-main">
      <div className="name-input-container">
        <input
          type="text"
          placeholder="Search for a name..."
          name="name"
          className="search"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="search-button" disabled={!this.state.name} onClick={this.handleSubmitName}>
          Submit
        </button>
      </div>
      <div className="name-search-container">
        <NameContainer/>
        <h4>^ Search for Breweries by Name ^</h4>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  nameResults:state.nameResults
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getNameResults }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameSearchContainer);