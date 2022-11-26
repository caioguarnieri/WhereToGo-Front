import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Travel = ({ _id: id, title, description, startDate, endDate }) => {
  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("pt-br").format(new Date(date));
  };

  return (
    <Link to={`/dashboard/${id}`}>
      <li className={styles.travel}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.period}>
          {formattedDate(startDate)} - {formattedDate(endDate)}
        </span>
        <p className={styles.description}>{description}</p>
      </li>
    </Link>
  );
};

export default Travel;
