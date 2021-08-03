import React,{useState, useEffect} from "react";
import Container from "./Container";
import "firebase/firestore";
import {db} from "../base";

function Home(props) {

  var docRef = db.collection("games");
  const [game, setGame] = useState([]);
  let gameArray = [];

  //useEffectを使わないとなんか無限ループする
  useEffect(() => {
    //カテゴリーが指定されていない時の表示
    if(props.category == null){
      //TOPページでの表示(カテゴリーが指定されていないときの表示)
      docRef.get().then((querySnapshot) => {
        //非同期処理が成功したときの処理
        querySnapshot.forEach((doc) => {
          gameArray.push(doc.data());
        });
        //onFulfilledのpromiseとgameArray変数の値を返す(返り値がpromiseなのでこの後もthenやcatchで処理する)
        return gameArray
      }).then((gameArray) => {
        //gameの値がgameArrayの値に置き換えられる
        setGame(gameArray);  
      }).catch((error) => {
        //非同期処理が失敗したときの処理
        console.log("Error getting document:", error);
      });
    };
  },[])

  console.log(game);

  return (
    <div>
        <Container title={"TOP"} category={null} gameDoc={game}/>
    </div>
  );
}

export default Home;