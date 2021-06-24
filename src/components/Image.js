import React from "react";

{/* 1枚の画像を表示するためのコンポーネント 
  複数の画像を表示するためのURL取得は別で行う */}
{/* 仮引数propsを使って親コンポーネントGalleryからプロパティ(src)を受け取る */}    
export default function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          {/* {式}のようにするとJavaScriptの式を埋め込むことができる */}
          <img src={props.src} alt="NO IMAGE"/>
        </figure>
      </div>
    </div>
  );
}