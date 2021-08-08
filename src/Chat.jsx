import React from 'react';
import Message from './Message';
import './Chat.css'
import {firebase,db} from './firebase';

function Chat() {
    let mess = []
    console.log(db)
    var docRef = db.collection("rooms").doc();

    
    db.collection("rooms").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().messages);
            mess = doc.data().messages
        });
    });
    

    return (
        <>
            <h4>Room</h4>
            <div className="chat">
            {
                mess.map((m,mess) => {
                    return (
                        <Message message={m}/>
                    )
                } )
            }
            <input className="chatText" type="text" value="Your message!"/>
            </div>
        </>
    )
}

export default Chat;
