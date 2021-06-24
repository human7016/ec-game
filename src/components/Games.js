import React from "react";
import Button from "@material-ui/core/Button";
import "firebase/firestore";
import {db, storage} from "../base";
import Gallery from "./Gallery"


export default function Games(){
    {/*async:非同期関数宣言*/}
    const getData = async () => {
        {/*try-catch構文:try(実行処理)catch(例外処理)*/}
        try {
            const data = db.collection('games');
            let image;
            let response = await data.get()
            //この書き方があっているかどうか
            response.docs.get('photo');
            {/*response.docs.forEach((doc) =>
            console.dir(doc.get('category'))
            )*/}
            //console.dir(storage.ref());
        } catch (e) {
            alert(e);
        }
    }

    return (
      <div className="game-container">
        {/* 子コンポーネントGalleryにURLの配列をプロパティとして渡す */}
        <Gallery urls={getData}/>
      </div>
    )
}
