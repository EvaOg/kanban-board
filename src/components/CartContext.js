import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [finishedCards, setFinishedCards] = useState([]);

  const addCard = (text) => {
    const newCard = {
      text: text,
      id: uuidv4(),
    };
    setCards([...cards, newCard]);
  };

  const deleteCardHandler = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  function addCardtoFinished(inProgressCards, x) {
    const newFinishedCard = inProgressCards.find((card) => x === card.id);
    setFinishedCards([...finishedCards, newFinishedCard]);
  }

  const deleteFinishedCardHandler = (id) => {
    setFinishedCards(finishedCards.filter((card) => card.id !== id));
  };

  //Storage cards

  useEffect(() => {
    const data = window.localStorage.getItem("cardsStorage");
    if (data !== null) setCards(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cardsStorage", JSON.stringify(cards));
  }, [cards]);

  //Storage finishedCards
  useEffect(() => {
    const data2 = window.localStorage.getItem("finishedCardsStorage");
    if (data2 !== null) setFinishedCards(JSON.parse(data2));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "finishedCardsStorage",
      JSON.stringify(finishedCards)
    );
  }, [finishedCards]);

  return (
    <CartContext.Provider
      value={{
        cards,
        setCards,
        addCard,
        deleteCardHandler,
        addCardtoFinished,
        finishedCards,
        deleteFinishedCardHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
