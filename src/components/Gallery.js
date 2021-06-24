import React from "react";
import Image from "./Image";

{/* Mainコンポーネントから渡されたURLの配列(urls)をJSX式に変換して子コンポーネントImageに渡す*/}
export default function Gallery(props) {
  const urls = props.urls;
  console.log(urls);
  return (
    <div className="columns is-vcentered is-multiline">
      {/* mapメソッドでurls配列の値を一個ずつJSX式にしてImageに渡す */}
      {/* map: 配列の値を一個ずつ処理する。変数urlはローカル変数 */}
      {/*
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            srcと言う名前のプロパティで画像のURLをImageコンポーネントに渡す 
            親コンポーネントから子コンポーネントにプロパティを渡すときは
            プロパティ名={値}またはプロパティ名="文字列"の形で書く 
            <Image src={url} />
          </div>
        );
      })}
    */}
    </div>
  );
}