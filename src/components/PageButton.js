import React,{useState} from "react";
import "firebase/firestore";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function PageButton(props){

  let countNext;

  //1ページ進むボタン
  async function countInc(){
    console.log("pushed countIncButton");
    console.log(props.count);
    if(props.count*10+10 < props.gameDoc.length){
      props.setCount(props.count+1);
    }
  }

  //1ページ戻るボタン
  async function countDec(){
    console.log("pushed countDecButton");
    console.log(props.count);
    if(props.count>0){
      props.setCount(props.count-1)
    }
  }

  //表示作品数が作品全体数を超えないようにするための制御
  if(props.count*10+10 < props.gameDoc.length){
    countNext = props.count*10+10;
  } else {
    countNext = props.gameDoc.length;
  }

  return(
    <div className="pageButton" style={{display:"flex"}}>
      <ArrowBackIosIcon onClick={countDec} />
      <div>{props.count+1}ページ目</div>
      <ArrowForwardIosIcon onClick={countInc} />
      <div>
        {props.count*10+1} ~ {countNext} / {props.gameDoc.length}作品中
      </div>
    </div>
  )
}