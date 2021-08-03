import React,{useState} from "react";
import PageButton from "./PageButton";
import GameData from "./GameData";

export default function GameInfo(props){

  const [count, setCount] = useState(0);

  return(
    <div>
      <ul>
        <div className="game-container">
        {props.gameDoc.slice(count*10, count*10+10).map((doc, index) =>
          <li className="game-image" key={index}>
            <GameData doc={doc}/>
          </li>
        )}
        </div>
      </ul>
      <PageButton gameDoc={props.gameDoc} count={count} setCount={setCount}/>
    </div>
  )
}