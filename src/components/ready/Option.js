import styles from "../Components.module.css";

function Option({ cards, addtoReady }) {
  return (
    <div className={styles.optionsList}>
      {cards.map((el) => (
        <ul>
          <li
            key={el.id}
            onClick={() => {
              addtoReady(el.id);
            }}
          >
            {el.text}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Option;
