import { useLocation } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";
import styles from "../Components.module.css";
import Note from "./Note";
import NotesList from "./NotesList";

const Task = ({ text }) => {
  const [note, setNote] = useState(false);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();
  const taskExplanationHandler = () => {
    return navigate("/");
  };

  const addNoteHandler = (text) => {
    const newNote = {
      text: text,
      id: uuidv4(),
    };

    setNotes([...notes, newNote]);
    setNote(false);
  };

  const location = useLocation();
  const data = location.state;
  return (
    <div className={styles.task}>
      <SlClose className={styles.closeIcon} onClick={taskExplanationHandler} />
      <h1>{data}</h1>
      <h2>Here will be an explonation of the task of the "{data}" task</h2>
      <NotesList notes={notes} />
      <SlNote className={styles.noteIcon} onClick={() => setNote(!note)} />
      {note && <Note addNote={addNoteHandler} />}
    </div>
  );
};

export default Task;
