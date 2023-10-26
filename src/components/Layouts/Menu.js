import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../Components.module.css";

import ReactLogo from "./logo.png";
import LogIn from "./LogIn";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className={styles.menuText}>
        <NavLink to="." end>
          Awesome Kanban Board
        </NavLink>
      </div>
      <div className={styles.logo}>
        <img src={ReactLogo} alt="React Logo" />
      </div>
      <div className={styles.arrow4} onClick={() => setOpen(!isOpen)}>
        <span
          className={`${styles.arrow4left}  ${isOpen ? styles.openLeft : ""}`}
        ></span>
        <span
          className={`${styles.arrow4right}  ${isOpen ? styles.openRight : ""}`}
        ></span>
      </div>
      {isOpen && <LogIn />}
    </nav>
  );
};

export default Menu;
