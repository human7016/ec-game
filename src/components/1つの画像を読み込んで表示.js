import React,{useState, useEffect} from "react";
import "firebase/firestore";
import {db, storage} from "../base";



export default function Games(){

  var docRef = db.collection("games").doc("1Cg3grPdahBGuAC2WKnY");
  const [game, setGame] = useState([]);
  let gameArray = []

  useEffect(() => {
    docRef.get().then((querySnapshot) => {
      //非同期処理が成功したときの処理
      if(querySnapshot.exists){
        gameArray.push(querySnapshot.data().name);
        return gameArray;
      } else {
        console.log("No such document!");
      }
    }).then((gameArray) => {
      console.log(gameArray)
      //gameの値がgameArrayの値に置き換えられる
        setGame(gameArray);  
    }).catch((error) => {
      //非同期処理が失敗したときの処理
      console.log("Error getting document:", error);
    });
  },[])

  return(
    <div>
      <ul>
        {game.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  )
}