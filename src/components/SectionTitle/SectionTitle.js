import s from './SectionTitle.module.css';
export default function SectionTitle({ title, children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}
