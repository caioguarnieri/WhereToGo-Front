import styles from "./styles.module.css";
import stepsServices from "../../../../services/steps";

const Step = ({
  _id,
  destination,
  startDate,
  endDate,
  budget,
  description,
  status,
  setSteps,
}) => {
  const formattedBudget = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(budget);

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("pt-br").format(new Date(date));
  };

  return (
    <li className={styles.item}>
      <h4 className={styles.city}>{destination}</h4>
      <span className={styles.budget}>{formattedBudget}</span>
      <span className={styles.period}>
        {formattedDate(startDate)} - {formattedDate(endDate)}
      </span>
      <button
        className={styles.remove}
        type="button"
        title="Remover Parada"
        onClick={async () => {
          await stepsServices.destroy(_id);
          setSteps((prevState) => {
            return prevState.filter((elem) => elem._id !== _id);
          });
        }}
      >
        X
      </button>
    </li>
  );
};

export default Step;
