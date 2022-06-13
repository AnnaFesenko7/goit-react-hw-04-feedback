import s from './FeedbackOptions.module.css';
import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.buttonWrapper}>
        <button
          className={s.button}
          name="good"
          type="button"
          onClick={this.handleBtn}
        >
          Good
        </button>
        <button
          className={s.button}
          name="neutral"
          type="button"
          onClick={this.handleBtn}
        >
          Neutral
        </button>
        <button
          className={s.button}
          name="bad"
          type="button"
          onClick={this.handleBtn}
        >
          Bad
        </button>
      </div>
    );
  }
  handleBtn = event => {
    const name = event.target.name;
    const { onLeaveFeedback } = this.props;
    onLeaveFeedback(name);
  };
}
