import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import travelsServices from "../../../../services/travels";

const Travel = ({
  _id: id,
  title,
  description,
  startDate,
  endDate,
  setTravels,
}) => {
  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("pt-br").format(new Date(date));
  };

  return (
    <li className={styles.travel}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.period}>
        {formattedDate(startDate)} - {formattedDate(endDate)}
      </span>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} to={`/dashboard/${id}`}>
        Ver Detalhes
      </Link>
      <button
        className={styles.remove}
        type="button"
        title="Remover Parada"
        onClick={async () => {
          await travelsServices.destroy(id);
          setTravels((prevState) => {
            return prevState.filter((elem) => elem._id !== id);
          });
        }}
      >
        X
      </button>
    </li>
  );
};

export default Travel;
