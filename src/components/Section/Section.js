import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section title="feedback" className={styles.feedbackSection}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: [],
};

export default Section;
