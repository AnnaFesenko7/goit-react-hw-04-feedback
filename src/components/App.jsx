import Feedback from './Feedback/Feedback';

import { useState, useEffect } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const totalClick = good + neutral + bad;
    setTotal(totalClick);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive((good / total) * 100);
  }, [total, good]);

  return (
    <div>
      <div>
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
          onLeaveFeedback={onLeaveFeedback}
        />
      </div>
    </div>
  );
}
