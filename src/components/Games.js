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
        querySnapshot.forEach((doc) => {
            images.push(
                <div key={doc.data().photo} className="column is-3">
                <Image src={doc.data().photo} />
                </div>
            )
        });
        return images;
    }

    function fetchImages() {
        docRef().then((images) => {
            setImages(images);
        })
    }

    return(
        <div>
            <Button onClick={fetchImages}>GET DATA</Button>
            {images}
        </div>
    )
}


    // const getData = async () => {
    //     {/*try-catch構文:try(実行処理)catch(例外処理)*/}
    //     try {
    //         db.collection('games').get().then((response) => {
    //             return (
    //                 <div className="columns is-vcentered is-multiline">
    //                 {
    //                     response.map((url) => {
    //                         return (
    //                             <div key={url} className="column is-3">
    //                             <Image src={url} />
    //                             </div>
    //                         );
    //                     })
    //                 }
    //                 </div>
    //             )
    //         })
    //     } catch (e) {
    //         alert(e);
    //     }
    // }
    
    // return (
    //     <div>
    //         <button onClick={fetchGames}>
    //             click me 
    //         </button>
    //     </div>
    // );
