import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      for (const key in prevState) {
        if (key === name) {
          return { [key]: prevState[key] + 1 };
        }
      }
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () => {
    this.setState(
      prevState => ({
        total: prevState.total + 1,
      }),
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positive: (prevState.good / prevState.total) * 100,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Feedback
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positive={this.state.positive}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </div>
      </div>
    );
  }
}
