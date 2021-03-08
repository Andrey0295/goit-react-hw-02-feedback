import React, { Component } from 'react';

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
    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <button
            type="button"
            className="goodBtn"
            name="good"
            onClick={this.handleChange}
          >
            Good
          </button>
          <button type="button" name="neutral" onClick={this.handleChange}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.handleChange}>
            Bad
          </button>
        </div>
        <div>
          <h1>Statistics</h1>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.state.total}</li>
            <li>Positive feedbacks: {this.state.positivePercentage}</li>
          </ul>
        </div>
      </>
    );
  }
}

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export default MainFeedback;
