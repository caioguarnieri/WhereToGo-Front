import styles from "./styles.module.css";

const Form = ({ onSubmit, title, children }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        {children}
      </form>
    </section>
  );
};

export default Form;
