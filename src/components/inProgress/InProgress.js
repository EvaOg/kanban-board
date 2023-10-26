import styles from "../Components.module.css";

function InProgress({ readyCards, addtoInProgress }) {
  return (
    <div className={styles.optionsList}>
      {readyCards.map((el) => (
        <ul>
          <li
            key={el.id}
            onClick={() => {
              addtoInProgress(el.id);
            }}
          >
            {el.text}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default InProgress;
