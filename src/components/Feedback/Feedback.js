import s from './Feedback.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Notification from 'components/Notification/Notification';

export default class Feedback extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positive, onLeaveFeedback } = this.props;
    return (
      <div className={s.Feedback}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}
