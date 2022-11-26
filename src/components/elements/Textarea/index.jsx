import styles from "./styles.module.css";

const Textarea = ({ name, placeholder, register }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      id={name}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default Textarea;
