import React,{useEffect,useState} from 'react';
import Message from './Message';
import './Chat.css'
import {firebase,db} from './firebase';

function Chat() {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState([])
    const [userdetails, setUserDetails] = useState({})

    useEffect(()=>{    
        setUserDetails({"name": localStorage.getItem("name"),
                        "room_id": localStorage.getItem("room_id")})
        console.log(userdetails)
        db.collection("rooms").where("room_id", "==", userdetails.room_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().messages);
                setMessages(doc.data().messages)
            });
        });
    },[])
    

    return (
        <>
            <h4>Room</h4>
            <div className="chat">
            {
                messages.map((m,messages) => {
                    return (
                        <Message message={m}/>
                    )
                } )
            }
            <input className="chatText" type="text" value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}/>
            </div>
        </>
    )
}

export default Chat;
