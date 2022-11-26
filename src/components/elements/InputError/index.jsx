import styles from "./styles.module.css";

const InputError = ({ children }) => {
  return <span className={styles.error}>{children}</span>;
};

export default InputError;
