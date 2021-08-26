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
        console.log(userdetails.room_id)
        db.collection("rooms").doc(localStorage.getItem("room_id")).onSnapshot((doc)=>{
            setMessages(doc.data().messages)
        })
    },[])
    

    const sendMessage = (e) =>{
        db.collection("rooms").doc(userdetails.room_id).update({"messages": [...messages, {"name":userdetails.name, "message":newMessage}]})
        setMessages([...messages, {"name":userdetails.name, "message":newMessage}])
        setNewMessage("")
        
        e.preventDefault()
        let ele = document.getElementsByClassName('chat')
        // ele.scrollIntoView(false)

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
