import React from 'react'
import './HomeContainer.css'

const HomeContainer = () => {
  return (
    <div>
      <form>
        <h4>Are you over 21?</h4>
        <label htmlFor="yes-button">Yes</label>
        <input type="radio" name="answer" value="yes" id="yes-button"/> 
        <label htmlFor="no-button">No</label>
        <input type="radio" name="answer" value="no" id="no-button"/> 
      </form>
    </div>
  )
}

export default HomeContainer