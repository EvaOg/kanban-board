import styles from "../Components.module.css";
import CartContext from "../CartContext";
import { useContext } from "react";

const Footer = () => {
  const { cards, finishedCards } = useContext(CartContext);

  return (
    <footer className={styles.footer}>
      <p>Active tasks: {cards.length}</p>
      <p>Finished tasks: {finishedCards.length} </p>
    </footer>
  );
};

export default Footer;
