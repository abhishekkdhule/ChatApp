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
        let docRef = db.collection("rooms").doc(localStorage.getItem("room_id"))
        docRef.get().then((doc) => {
            setMessages(doc.data().messages)
        })
    },[])    

    const sendMessage = (e) =>{
        e.preventDefault()
        if(newMessage.length !== 0) {
            db.collection("rooms").doc(userdetails.room_id)
            .onSnapshot((doc) => {
                setMessages(doc.data().messages)
            })
            db.collection("rooms").doc(userdetails.room_id).update({"messages": [{"name":userdetails.name, "message":newMessage}, ...messages]})
            setMessages([{"name":userdetails.name, "message":newMessage}, ...messages])
            setNewMessage("")
    
            let ele = document.getElementsByClassName('chat')
        }
        // ele.scrollIntoView(false)
    }

    return (
        <>
                <h4 className="text-center text-white mt-4">Room ID: <small>{userdetails.room_id}</small></h4>
            <div className="main_chat">
                <div className="chat">
                {
                    messages.map((m,messages) => {
                        return (
                            <Message message={m.message} name={m.name}/>
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
