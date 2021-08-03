import React,{useState, useEffect} from "react";
import Container from "./Container";
import "firebase/firestore";
import {db} from "../base";

function Shooting(props) {

  var docRef = db.collection("games");
  const [game, setGame] = useState([]);
  let gameArray = [];

  useEffect(() => {
    //カテゴリーが指定されたときの表示
    docRef.where("category", "==", "シューティング").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        gameArray.push(doc.data());
      });
      console.log(gameArray);
      return gameArray;
    }).then((gameArray) => {
      setGame(gameArray);  
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  },[])

  return (
    <div>
        <Container title={"シューティング"} category={"シューティング"} gameDoc={game}/>
        <main>
        </main>
    </div>
  );
}

export default Shooting;