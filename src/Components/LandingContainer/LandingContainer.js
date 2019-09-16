import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './LandingContainer.css'

class LandingContainer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      redirect: false,
      error: 'You must be 21 to enter this site'
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitUserInfo = (e) => {
    e.preventDefault()
    this.setState({ name: "" });
    this.setState({ age: "" });
    if(this.state.age >= 21) {
      this.setState({ redirect: true})
    } else {
      return <p>{this.state.error}</p>
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <input
          type="text"
          placeholder="Please Enter Your Name"
          name="name"
          className="user-name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Please Enter Your Age"
          name="age"
          className="user-age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleSubmitUserInfo}>
          Submit
        </button>
      </div>
    )
  }
}
export default LandingContainer