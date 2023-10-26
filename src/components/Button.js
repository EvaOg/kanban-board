import styles from "./Components.module.css";

function Button({ onClick }) {
  return (
    <button className={styles.btnaddCard} onClick={onClick}>
      + Add card
    </button>
  );
}

export default Button;
