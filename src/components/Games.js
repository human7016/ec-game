import React from "react";
import Button from "@material-ui/core/Button";
import "firebase/firestore";
import {db, storage} from "../base";

export default function Games(){
    const getData = async () => {
        try {
            const data = db.collection('games');
            let response = await data.get()
            response.docs.forEach((doc) =>
                console.dir(doc.get('category'))
            )
            //console.dir(storage.ref());
        } catch (e) {
            alert(e);
        }
    }

    return (
        <Button onClick={getData}>GET DATA</Button>
    )
}