import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedbacks: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
