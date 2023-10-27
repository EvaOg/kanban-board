import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import styles from "../Components.module.css";

import Button from "../Button";
import Header from "./Header";

import CreateCard from "../backlog/CreateCard";
import CardsList from "../backlog/CardsList";

import InProgress from "../inProgress/InProgress";
import InProgressCardList from "../inProgress/InProgressCardList";

import Finished from "../finished/Finished";
import FinishedCardList from "../finished/FinishedCardList";
import CartContext from "../CartContext";

function Home() {
  const [btnDisplay, setBtnDisplay] = useState(true);
  const [component, setComponent] = useState([]);
  const {
    cards,
    setCards,
    addCard,
    deleteCardHandler,
    addCardtoFinished,
    finishedCards,
    deleteFinishedCardHandler,
  } = useContext(CartContext);

  const [inProgress, setInProgress] = useState(false);
  const [inProgressCards, setInProgressCards] = useState([]);
  const [finished, setFinished] = useState(false);

  function addCardButtonHandler() {
    setComponent(["create component"]);
    setBtnDisplay(!btnDisplay);
  }

  const addCardHandler = (text) => {
    addCard(text);
    setComponent([]);
  };

  function addtoInProgressHandler(x) {
    const newInProgressCard = cards.find((card) => x === card.id);
    setCards(cards.filter((card) => card.id !== x));
    setInProgressCards([...inProgressCards, newInProgressCard]);
    setInProgress(!inProgress);
  }

  function addtoFinishedHandler(x) {
    addCardtoFinished(inProgressCards, x);
    setInProgressCards(inProgressCards.filter((card) => card.id !== x));
    setFinished(!finished);
  }

  const navigate = useNavigate();
  const taskExplanationHandler = (text) => {
    return navigate("/:task", { state: text });
  };

  useEffect(() => {
    const data4 = window.localStorage.getItem("inProgressCardsStorage");
    if (data4 !== null) setInProgressCards(JSON.parse(data4));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "inProgressCardsStorage",
      JSON.stringify(inProgressCards),
    );
  }, [inProgressCards]);

  return (
    <div className={styles.home}>
      <div className={styles.block}>
        <Header headerName={"backlog"} />
        <div className={styles.cardsList}>
          <CardsList
            cards={cards}
            deleteCard={deleteCardHandler}
            taskExplanation={taskExplanationHandler}
          />
          {component.map((item, i) => (
            <CreateCard
              addCards={addCardHandler}
              setBtnDisplayHandler={() => setBtnDisplay(!btnDisplay)}
            />
          ))}
          {btnDisplay && (
            <Button
              className={styles.btnaddCard}
              onClick={addCardButtonHandler}
            />
          )}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"in progress"} />
        <div className={styles.cardsList}>
          <InProgressCardList
            inProgressCards={inProgressCards}
            taskExplanation={taskExplanationHandler}
          />
          {cards.length > 0 && (
            <Button
              onClick={() => setInProgress(!inProgress)}
              className={styles.btnaddCard}
            />
          )}
          {inProgress && (
            <InProgress
              addtoInProgress={addtoInProgressHandler}
              cards={cards}
            />
          )}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"finished"} />
        <div className={styles.cardsList}>
          <FinishedCardList
            finishedCards={finishedCards}
            deleteCard={deleteFinishedCardHandler}
            taskExplanation={taskExplanationHandler}
          />
          {inProgressCards.length > 0 && (
            <Button
              onClick={() => setFinished(!finished)}
              className={styles.btnaddCard}
            />
          )}
          {finished && (
            <Finished
              addFinished={addtoFinishedHandler}
              inProgressCards={inProgressCards}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
