import React from "react";
import {Link} from "react-router-dom";

export default function GameData(props) {
  //useLocationを使ってリンク先に商品名を渡す
  //https://qiita.com/h-yoshikawa44/items/aa78b6c7cd1ef43549bf#%E3%82%AF%E3%82%A8%E3%83%AA%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%82%84%E4%BB%BB%E6%84%8F%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E3%81%84%E3%81%9F%E3%81%84
  const detail = {
    //pathname:URLを指定する
    pathname: '/detail/'+ props.doc.name,
    //state:任意のパラメータを渡せる
    state: { name: props.doc.name }
  };

  return(
    <div style={{marginBottom:"30px", display:"flex"}}>
      <img src={props.doc.photo} alt="not image" height="220px" width="330px"/>
      <div className="game-info" style={{marginLeft:"30px"}}>
        <Link to={detail} ><h1>{props.doc.name}</h1></Link>
        <p>price: ¥{props.doc.price}</p>
      </div>
    </div>
  );
}