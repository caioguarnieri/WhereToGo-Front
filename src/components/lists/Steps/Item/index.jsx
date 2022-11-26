import styles from "./styles.module.css";

const Step = ({
  destination,
  startDate,
  endDate,
  budget,
  description,
  status,
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
    </li>
  );
};

export default Step;
