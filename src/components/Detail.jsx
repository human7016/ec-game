import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "firebase/firestore";
import {db} from "../base";

export default function Detail() {
  const [game, setGame] = useState({});
  const location = useLocation(); // GameInfoから渡されたパラメータを取得
  console.log(location.state.name);
  let docRef = db.collection("games");
  let gameArray = [];

  useEffect(() => {
    docRef.where("name", "==", location.state.name).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        gameArray.push(doc.data());
      });
      console.log(gameArray);
      return gameArray;
    }).then((gameArray) => {
      setGame(gameArray[0]); 
      console.log(game); 
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, []);
  return (
    <>
      <h1>{game.name}</h1>
      {game ? (
        <ul>
          <li><img src={game.photo} alt="not image"/></li>
          <li>explain</li>
          <li>Category: {game.category}</li>
          <li>Price: {game.price}</li>
        </ul>
      ) : (
        <>Loading</>
      )}
    </>
  );
};
