import styles from "./styles.module.css";

const Label = ({ htmlFor, children }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
