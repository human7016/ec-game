import React from "react";
import Button from "@material-ui/core/Button";
import "firebase/firestore";
import {db, storage} from "../base";
import Image from "./Image";


export default function Games(){
    {/*async:非同期関数宣言*/}
    const getData = async () => {
        {/*try-catch構文:try(実行処理)catch(例外処理)*/}
        try {
             db.collection('games').get().then((response) => {
                 return response;
             })
            {/*response.docs.forEach((doc) =>
            console.dir(doc.get('category'))
            )*/}
            //console.dir(storage.ref());
        } catch (e) {
            alert(e);
        }
    }

    //console.log(getData());
    return (
        <div className="columns is-vcentered is-multiline">
        {/* mapメソッドでurls配列の値を一個ずつJSX式にしてImageに渡す */}
        {/* map: 配列の値を一個ずつ処理する。変数urlはローカル変数 */}
        {
            getData().then((response) => {
                console.log(response);
                response.map((url) => {
                    return (
                        <div key={url} className="column is-3">
                        {/*srcと言う名前のプロパティで画像のURLをImageコンポーネントに渡す 
                        親コンポーネントから子コンポーネントにプロパティを渡すときは
                        プロパティ名={値}またはプロパティ名="文字列"の形で書く*/} 
                        <Image src={url} />
                        </div>
                    );
                })
            })
}</div>
    )
}
