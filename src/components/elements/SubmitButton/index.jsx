import styles from "./styles.module.css";

const SubmitButton = ({ title, placeholder, children }) => {
  return (
    <button className={styles.btn} type="submit" title={title}>
      {children}
    </button>
  );
};

export default SubmitButton;
