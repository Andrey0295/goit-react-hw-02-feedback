import React from 'react';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {options.map(i => (
        <button
          type="button"
          name={i}
          className={styles.fedbackBtn}
          onClick={onLeaveFeedback}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
