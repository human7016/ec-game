import React from "react";
import Container from "./Container";
//import { app } from "../base";

function Adventure(props) {

  return (
    <div>

      {/*子コンポーネントContainerで変数titleを使う宣言*/}
      <Container title={"アドベンチャー"} category={"アドベンチャー"}/>
      <main>

      </main>
    </div>
  );
}

export default Adventure;