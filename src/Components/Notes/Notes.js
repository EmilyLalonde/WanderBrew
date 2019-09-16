import React from 'react'
import Note from '../Note/Note'

const Notes = ({notes}) => {
  const notesList = notes.map(note => {
    return <Note note={note}/>
  })
  return (
    <div>
      {notesList}
    </div>
  )
}

export default Notes