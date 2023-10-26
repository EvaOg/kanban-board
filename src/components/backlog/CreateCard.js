import { useState } from "react";
import styles from "../Components.module.css";

function CreateCard({ addCards, setBtnDisplayHandler }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addCards(text);
      setText("");
      setBtnDisplayHandler();
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={styles.card}>
        <input
          type="text"
          className={styles.input}
          placeholder="New card"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button className={styles.btnaddCard} onClick={onSubmitHandler}>
        submit
      </button>
    </>
  );
}

export default CreateCard;
