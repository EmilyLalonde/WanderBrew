import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNameResults } from '../../actions'
import './NameSearchContainer.css'
import { getBreweriesByName } from "../../apiCalls/apiCalls";
import NameContainer from '../NameContainer/NameContainer';

class NameSearchContainer extends Component {
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
  }
    // this.setState({ stateSearch: [] });
    // this.setState({ name: "" });
    // try {
    //   const nameSearch = await getBreweriesByName(this.state.name)
    //   this.setState({ nameSearch })
    // } catch ({ message }) {
    //   this.setState({ error: message });
    // }
  

  render() {
    console.log(this.props)
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
        <NameContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nameResults:state.nameResults
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getNameResults }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NameSearchContainer)