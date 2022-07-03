import * as React from "react";
import TrumpList from "../component/TrumpList.js";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { auth } from "../firebase.js";
import {Navigate, useNavigate} from "react-router-dom"

// import {makeStyles, createStyles } from '@mui/material';
// const useStyle = makeStyles(() =>
//   createStyles({
//     "button": {

//     }
//   }),
// )

const TrumpPage = () => {
  // トランプの山札を用意する関数
  const prepareCards = () => {
    const numbers = [...Array(13).keys()].map((d) => {
      return d + 1;
    });
    const marks = ["♡", "♢", "♤", "♧"];

    const objs = [];

    numbers.forEach((number) => {
      marks.forEach((mark) => {
        const obj = {
          number: number,
          mark: mark,
          id: uuidv4(),
        };
        objs.push(obj);
      });
    });
    return objs;
  };

  // 山札シャッフル用の関数
  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState(shuffle(prepareCards()));
  const [drawnCards, setDrawnCards] = useState([]);

  // カードを引く処理
  const handleDrawCard = () => {
    const card = cards.pop();
    console.log(cards);

    setDrawnCards((prevDrawnCards) => {
      return [...prevDrawnCards, card];
    });
  };

  // 山札を戻す処理
  const handleResetCards = () => {
    setCards(shuffle(prepareCards()));
    setDrawnCards([]);
    return;
  };

  const navigate = useNavigate()

  const handleSignOut = () => {
    auth.signOut()
    navigate("/signin");
  }

  return (
    <div>
      <div style={{display: "flex"}}>
        <h1>トランプを引く</h1>
        <button onClick={handleSignOut}>サインアウト</button>
      </div>
      <p>引いたカード一覧</p>
      <TrumpList drawnCards={drawnCards} />
      <button onClick={handleDrawCard}>カードを引く</button>
      <button onClick={handleResetCards}>山札リセット</button>
    </div>
  );
};

export default TrumpPage;
