import { RiDeleteBin2Line } from "react-icons/ri";
import styles from "../Components.module.css";

function FinishedCardList({ finishedCards, deleteCard, taskExplanation }) {
  return finishedCards.map((card) => (
    <div className={styles.card}>
      <div
        className={styles.cardText}
        onClick={() => taskExplanation(card.text)}
      >
        {card.text}
      </div>
      <RiDeleteBin2Line
        className={styles.cardIcon}
        onClick={() => deleteCard(card.id)}
      />
    </div>
  ));
}

export default FinishedCardList;
