import React,{useEffect,useState} from 'react';
import Message from './Message';
import './Chat.css'
import {firebase,db} from './firebase';

function Chat() {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [userdetails, setUserDetails] = useState({})

    useEffect(()=>{    
        setUserDetails({"name": localStorage.getItem("name"),
                        "room_id": localStorage.getItem("room_id")})
       
        db.collection("rooms").where("room_id", "==", localStorage.getItem("room_id")).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().messages);
                setMessages(doc.data().messages)
            });
        });
    },[])
    

    const sendMessage = (e) =>{
        setMessages([...messages, {"name":userdetails.name, "message":newMessage}])
        setNewMessage("")
        console.log(...messages, {"name":userdetails.name, "message":newMessage} )
        e.preventDefault()
        let doc = db.collection("rooms").where("room_id", "==", userdetails.room_id).get()
        console.log(doc)
    }

    return (
        <>
            <h4>Room</h4>
            <div className="main_chat">
                <div className="chat">
                {
                    messages.map((m,messages) => {
                        return (
                            <Message message={m}/>
                        )
                    } )
                }
                
                </div>
                <form onSubmit={sendMessage}>
                    <input className="chatText" type="text" value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}/>
                </form>
            </div>
        </>
    )
}

export default Chat;
