import styles from "../Components.module.css";

function NotesList({ notes }) {
  return notes.map((note) => (
    <div className={styles.note}>
      <div className={styles.cardText}>{note.text}</div>
    </div>
  ));
}

export default NotesList;
