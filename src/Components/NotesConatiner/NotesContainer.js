import React, { Component } from 'react'
import Notes from '../Notes/Notes'
import './NotesContainer.css'

class NotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      note: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.note);
    this.setState({ note: ''});
  }

  render(){
  return (
    <div className="notes">
      <form>
      <input 
      type="text" 
      placeholder="Add notes here" 
      name="note" 
      value={this.state.note} 
      onChange={this.handleChange}>
      </input>
      <button type="submit" onClick={this.submitNote}>Add Note</button>
      </form>
      <Notes notes={this.props.notes} />
    </div>
  )}
}

export default NotesContainer