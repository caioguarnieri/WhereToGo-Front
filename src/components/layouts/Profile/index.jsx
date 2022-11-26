import { useUser } from "../../../providers/user";
import styles from "./styles.module.css";

const Profile = () => {
  const { logout } = useUser();
  return (
    <aside className={styles.profile}>
      <h1>Meu Perfil</h1>
      <button
        className={styles.logout}
        type="button"
        title="Sair"
        onClick={logout}
      >
        Sair
      </button>
    </aside>
  );
};

export default Profile;
