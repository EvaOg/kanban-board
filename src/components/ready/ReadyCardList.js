import styles from "../Components.module.css";

function ReadyCardList({ readyCards, taskExplanation }) {
  return readyCards.map((card) => (
    <div className={styles.card}>
      <div
        className={styles.cardText}
        onClick={() => taskExplanation(card.text)}
      >
        {card.text}
      </div>
    </div>
  ));
}

export default ReadyCardList;
