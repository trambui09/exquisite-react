import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [fields, setFields] = useState({
    'adj1': '',
    'noun1': '',
    'adv': '',
    'verb': '',
    'adj2': '',
    'noun2': ''
  });

  const onInputChange = (event) => {
    debugger;
    const {name, value} = event.target

    const newFields = {
      ...fields
    }

    newFields[name] = value
    setFields(newFields)

  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    // // sends the state up to the game
    props.sendSubmission(fields);
    // // with a callback func
   
    // // clear the text fields 
    setFields({
      'adj1': '',
      'noun1': '',
      'adv': '',
      'verb': '',
      'adj2': '',
      'noun2': ''
    })
  }

  // draft in order to DRY up the code ...
  // needs refinement 
  const validInput = () => {
    const {adj1, noun1, adv, verb, adj2, noun2} = fields
    return adj1 === '' || noun1 === '' || adv === '' || verb === '' || adj2 === '' || noun2 === ''

    // if any of the fields keys are empty
  }

  // TODO: DRY up this code

  const validAdjective1 = () => {
    const {adj1} = fields
    return adj1 === ''
  }

  const validNoun1 = () => {
    const {noun1} = fields
    return noun1 === ''
  }

  const validAdverb = () => {
    const {adv} = fields
    return adv === ''
  }



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The</p>
          <input
            placeholder="adjective1"
            type="text" 
            name='adj1'
            value={fields.adj1}
            onChange={onInputChange}
            className={validAdjective1() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
          />
          <input
            placeholder='noun1'
            type='text'
            name='noun1'
            value={fields.noun1}
            onChange={onInputChange}
            className={validNoun1() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid'}
          />
          <input 
            placeholder='adverb1'
            type='text'
            name='adv'
            value={fields.adv}
            onChange={onInputChange}
            className={validAdverb() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid'}
          />
          <input 
            placeholder='verb1'
            type='text'
            name='verb'
            value={fields.verb}
            onChange={onInputChange}
            className={validInput() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid'}
          />
          <p>the</p>
          <input 
            placeholder='adjective2'
            type='text'
            name='adj2'
            value={fields.adj2}
            onChange={onInputChange}
            className={validInput() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid'}
          />
          <input 
            placeholder='noun2'
            type='text'
            name='noun2'
            value={fields.noun2}
            onChange={onInputChange}
            className={validInput() ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid'}
          />
          <p>.</p>

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
