import React, {useState, useEffect} from "react";
import "firebase/firestore";
import {db, storage} from "../base";
import Image from "./Image";
import { SettingsSystemDaydreamSharp } from "@material-ui/icons";
import {Button} from "@material-ui/core"; 

export default function Games(){
    const [images, setImages] = useState([]);

    async function docRef(){
        let querySnapshot = await db.collection("games").get()
        let gameInfo = [];
        querySnapshot.forEach((doc) => {
            gameInfo.push(
                <div key={doc.data().photo} className="column is-3">
                <Image src={doc.data().photo} />
                </div>
            )
        });
        //onFulfilledのpromiseとgameInfo変数の値を返す(返り値がpromiseなのでこの後thenやcatchで処理する)
        return gameInfo;
    }

    function fetchImages() {
        docRef().then((gameInfo) => {
            setImages(gameInfo);
        }).catch(() => {
            console.log("No such File");
        })
    }

    return(
        <div>
            <Button onClick={fetchImages}>GET DATA</Button>
            {images}
        </div>
    )
}