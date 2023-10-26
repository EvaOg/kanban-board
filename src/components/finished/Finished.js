import styles from "../Components.module.css";

function Finished({ inProgressCards, addFinished }) {
  return (
    <div className={styles.optionsList}>
      {inProgressCards.map((el) => (
        <ul>
          <li
            key={el.id}
            onClick={() => {
              addFinished(el.id);
            }}
          >
            {el.text}
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Finished;
