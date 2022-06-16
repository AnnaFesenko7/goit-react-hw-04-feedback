import s from './FeedbackOptions.module.css';
// import { useState, useEffect } from 'react';

export default function FeedbackOptions({ onLeaveFeedback }) {
  const handleBtn = event => {
    const name = event.target.name;
    onLeaveFeedback(name);
  };
  return (
    <div className={s.buttonWrapper}>
      <button
        className={s.button}
        name="good"
        type="button"
        onClick={handleBtn}
      >
        Good
      </button>
      <button
        className={s.button}
        name="neutral"
        type="button"
        onClick={handleBtn}
      >
        Neutral
      </button>
      <button className={s.button} name="bad" type="button" onClick={handleBtn}>
        Bad
      </button>
    </div>
  );
}
