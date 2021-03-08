import React, { Component } from 'react';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class MainFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleChange = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => ({
      positivePercentage: (prevState.good * 100) / prevState.total,
    }));
  }

  render() {
    const buttonNames = ['good', 'bad', 'neutral'];
    return (
      <>
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={this.handleChange}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </>
    );
  }
}

export default MainFeedback;
