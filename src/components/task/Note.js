import { useState } from "react";
import styles from "../Components.module.css";

function Note({ addNote }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addNote(text);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={styles.noteInput}
        placeholder="Make a note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default Note;
