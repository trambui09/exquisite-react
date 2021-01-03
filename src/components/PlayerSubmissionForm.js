import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [playerCount, setPlayerCount] = useState(1)

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ playerCount }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The</p>
          <input
            placeholder="adjective"
            type="text" 
          />
          <input
            placeholder='noun'
            type='text'
          />
          <input 
            placeholder='adverb'
            type='text'
          />
          <input 
            placeholder='verb'
            type='text'
          />
          <p>the</p>
          <input 
            placeholder='adjective'
            type='text'
          />
          <input 
            placeholder='noun'
            type='text'
          />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
