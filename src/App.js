import React, { Component } from 'react';

import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleChange = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  }

  render() {
    const buttonNames = ['good', 'bad', 'neutral'];
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section>
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.handleChange}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
