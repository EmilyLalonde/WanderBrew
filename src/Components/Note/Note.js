import React from 'react'
import './Note.css'

const Note = ({note}) => {
  return (
      <li className="note-text">{note}</li>
  )
}

export default Note