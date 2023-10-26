import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import styles from "../Components.module.css";

import Button from "../Button";
import Header from "./Header";

import CreateCard from "../backlog/CreateCard";
import CardsList from "../backlog/CardsList";

import Option from "../ready/Option";
import ReadyCardList from "../ready/ReadyCardList";

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
  const [option, setOption] = useState(false);
  const [readyCards, setReadyCards] = useState([]);
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

  function addtoReadyHandler(x) {
    if (cards && cards.length > 0) {
      const newReadyCard = cards.find((card) => x === card.id);
      setCards(cards.filter((card) => card.id !== x));
      setReadyCards([...readyCards, newReadyCard]);
      setOption(!option);
    }
  }

  function addtoInProgressHandler(x) {
    const newInProgressCard = readyCards.find((card) => x === card.id);
    setReadyCards(readyCards.filter((card) => card.id !== x));
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

  //Storage readyCards
  useEffect(() => {
    const data3 = window.localStorage.getItem("readyCardsStorage");
    if (data3 !== null) setReadyCards(JSON.parse(data3));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "readyCardsStorage",
      JSON.stringify(readyCards)
    );
  }, [readyCards]);

  //Storage inProgressCards
  useEffect(() => {
    const data4 = window.localStorage.getItem("inProgressCardsStorage");
    if (data4 !== null) setInProgressCards(JSON.parse(data4));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "inProgressCardsStorage",
      JSON.stringify(inProgressCards)
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
        <Header headerName={"ready"} />
        <div className={styles.cardsList}>
          <ReadyCardList
            readyCards={readyCards}
            taskExplanation={taskExplanationHandler}
          />
          {cards.length > 0 && (
            <Button
              className={styles.btnaddCard}
              onClick={() => setOption(!option)}
            />
          )}
          {option && <Option addtoReady={addtoReadyHandler} cards={cards} />}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"in progress"} />
        <div className={styles.cardsList}>
          <InProgressCardList
            inProgressCards={inProgressCards}
            taskExplanation={taskExplanationHandler}
          />
          {readyCards.length > 0 && (
            <Button
              onClick={() => setInProgress(!inProgress)}
              className={styles.btnaddCard}
            />
          )}
          {inProgress && (
            <InProgress
              addtoInProgress={addtoInProgressHandler}
              readyCards={readyCards}
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
