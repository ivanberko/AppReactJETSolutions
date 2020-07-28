import React from 'react';
import PropTypes from 'prop-types';
import { container } from './stylesStats.module.css';

const Stats = ({ implementation, counterAttempt, wins, bestResult }) => (
  <section className={container}>
    <h4>
      Number of attempts: <span>{counterAttempt}</span>
    </h4>
    <h4>
      Guessed: <span>{implementation} of 8</span>
    </h4>
    <h4>
      Number of wins: <span>{wins}</span>
    </h4>
    <h4>
      Best result: <span>{bestResult}</span>
    </h4>
  </section>
);

Stats.propTypes = {
  implementation: PropTypes.number.isRequired,
  counterAttempt: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  bestResult: PropTypes.number.isRequired,
};

export default Stats;
