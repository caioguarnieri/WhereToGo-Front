import styles from "./styles.module.css";

const Input = ({
  type,
  name,
  title,
  placeholder,
  required = false,
  register,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      id={name}
      title={title}
      placeholder={placeholder}
      required={required}
      {...register(name)}
    />
  );
};

export default Input;
