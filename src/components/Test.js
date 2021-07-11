import React,{useState, useEffect} from "react";
import "firebase/firestore";
import {db, storage} from "../base";


export default function Games(){
  var docRef = db.collection("games");
  const [game, setGame] = useState([]);
  let gameArray = []

  //useEffectを使わないとなんか無限ループする
  useEffect(() => {
    docRef.get().then((querySnapshot) => {
      //非同期処理が成功したときの処理
      querySnapshot.forEach((doc) => {
        gameArray.push(doc.data().photo);
      });
      console.log(gameArray)
      //onFulfilledのpromiseとgameInfo変数の値を返す(返り値がpromiseなのでこの後もthenやcatchで処理する)
      return gameArray;
    }).then((gameArray) => {
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
        <div className="game-container">
        {game.map((photo, index) => 
          // reactでcssを適用する時は要素タグにstyle={{cssの内容}}
          <li className="game-image" key={index} style={{marginBottom:"30px", display:"flex"}}>
            <img src={photo} alt="not image" height="220px" width="330px"/>
            <div className="game-info">
              <h1>name</h1>
              <p>price: ¥1000</p>
            </div>
          </li>)
        }
        </div>
      </ul>
    </div>
  )
}