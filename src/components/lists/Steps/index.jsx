import Destination from "./Item";
import styles from "./styles.module.css";

const Steps = ({ steps, setSteps, openModal }) => {


  return (
    <ul className={styles.list}>
      <>
        {steps?.map((step) => (
          <Destination key={step._id} {...step} setSteps={setSteps} />
        ))}
        <li className={styles.btnContainer}>
          <button
            className={styles.btn}
            type="button"
            title="Adicionar Parada"
            onClick={openModal}
          >
            +
          </button>
        </li>
      </>
    </ul>
  );
};

export default Steps;
