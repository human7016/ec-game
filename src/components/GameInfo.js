import React,{useState, useEffect} from "react";
import "firebase/firestore";
import {db, storage} from "../base";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StripeButton from './StripeButton';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core"; 
import { Link } from "react-router-dom";

export default function GameInfo(props){
  var docRef = db.collection("games");
  const [game, setGame] = useState([]);
  const [count, setCount] = useState(0);
  let countNext;
  let gameArray = [];

  //useEffectを使わないとなんか無限ループする
  useEffect(() => {
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
    } else {
      //カテゴリーが指定されたときの表示
      docRef.where("category", "==", props.category).get().then((querySnapshot) => {
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
    }
  },[])

  //1ページ進むボタン
  async function countInc(){
    console.log("pushed countIncButton");
    if(count*10+10 < game.length){
      setCount(count+1);
    }
  }

  //1ページ戻るボタン
  async function countDec(){
    console.log("pushed countDecButton")
    if(count>0){
      setCount(count-1)
    }
  }

  if(count*10+10 < game.length){
    countNext = count*10+10;
  } else {
    countNext = game.length;
  }

  return(
    <div>
      <div>
        {count*10+1} ~ {countNext} / {game.length}作品中
      </div>
      <ul>
        <div className="game-container">
        {game.slice(count*10, count*10+10).map((doc, index) => 
          // reactでcssを適用する時は要素タグにstyle={{cssの内容}}てやると簡単
          <li className="game-image" key={index} style={{marginBottom:"30px", display:"flex"}}>
            <img src={doc.photo} alt="not image" height="220px" width="330px"/>
            <div className="game-info" style={{marginLeft:"30px"}}>
              <h1>{doc.name}</h1>
              <p>price: ¥{doc.price}</p>
              <a href='/buysection'>
                <Button 
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/buysection"
                  props={doc}
                >
                  check out
                </Button>
              </a>
              {/* <StripeButton name={doc.name} price={doc.price} photo={doc.photo}/> */}
            </div>
          </li>)
        }
        </div>
      </ul>
      <Grid justifyContent="center">
        <ArrowBackIosIcon onClick={countDec} />
        <div style={{hight:"200px" ,display:"inline-block", paddingBottom:"50px"}}>{count+1}ページ目</div>
        <ArrowForwardIosIcon onClick={countInc} />
      </Grid>
    </div>
  )
}