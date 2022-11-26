import Travel from "./Card";
import styles from "./styles.module.css";

const Travels = ({ travels, openModal }) => {
  return (
    <ul className={styles.travels}>
      {travels?.map((travel) => (
        <Travel key={travel._id} {...travel} />
      ))}

      <li className={styles.btnContainer}>
        <button
          className={styles.btn}
          type="button"
          title="Adicionar Viagem"
          onClick={openModal}
        >
          +
        </button>
      </li>
    </ul>
  );
};

export default Travels;
