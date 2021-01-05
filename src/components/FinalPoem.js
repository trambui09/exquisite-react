import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onFinalSubmit = (event) => {
    event.preventDefault();

    props.revealPoem();




  }

  const lines = props.submissions.map(line => 
    <li>{line}</li>
  )

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <ul className="FinalPoem__poem--list">{lines}</ul>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onSubmit={onFinalSubmit} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
