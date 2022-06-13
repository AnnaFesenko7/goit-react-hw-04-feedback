import s from './Statistics.module.css';
export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <>
      <span className={s.Counter__value}>Good: {good}</span>
      <span className={s.Counter__value}>Neutral: {neutral}</span>
      <span className={s.Counter__value}>Bad: {bad}</span>
      <span className={s.Counter__value}>Total: {total}</span>
      <span className={s.Counter__value}>
        Positive feedback: {Math.round(positive)} %
      </span>
    </>
  );
}
