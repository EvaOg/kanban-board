import styles from "../Components.module.css";
import Triangle from "./Triangle.png";

const LogIn = () => {
  return (
    <div className={styles.logInDiv}>
      <div className={styles.triangle}>
        <img src={Triangle} />
      </div>
      <ul className={styles.logInUl}>
        <li className={styles.logInLi}>Profile</li>
        <li className={styles.logInLi}>Log Out</li>
      </ul>
    </div>
  );
};

export default LogIn;
