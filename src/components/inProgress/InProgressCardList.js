import styles from "../Components.module.css";

function InProgressCardList({
  inProgressCards,
  deleteCardfromReady,
  taskExplanation,
}) {
  return inProgressCards.map((card) => (
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

export default InProgressCardList;
