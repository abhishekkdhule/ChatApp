import React,{useState} from 'react'
import styles from './Homepage.module.css'
import {firebase, db} from './firebase';
import { Redirect, useHistory  } from 'react-router';

function Homepage() {

    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')
    
    const [hompageStyles, sethompageStyles] = useState({input_box:styles.initial_display ,closingBtn:styles.create_room_button, openingBtn:styles.initial_display})
    const history = useHistory()
    
    const createRoom = (e) => {
        sethompageStyles({input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const joinRoom = () => {
        sethompageStyles({input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const enterRoom = () => {
        // let room_id = localStorage.getItem("room_id")
        
        const roomRef = db.collection('rooms').doc(roomId)
        
        
        roomRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                roomRef.onSnapshot((doc) => {
                // do stuff with the data
                localStorage.setItem("room_id",doc.id)
                setRoomId(doc.id)
            });
            } else {
                db.collection("rooms").add({
                        room_id: roomId,
                        messages: []
                    })
                    .then((docRef) =>{
                        localStorage.setItem("room_id",docRef.id)
                        setRoomId(docRef.id)
                    })
            }
        });
            
        // db.collection("rooms").add({
        //     room_id: roomId,
        //     messages: []
        // })
        // .then((docRef) => localStorage.setItem("room_id",docRef.id))
        localStorage.setItem("name",username)
        history.push("/chat")
    }
    return (
        <>
        <form>
            <div className={styles.main}>
                <div className={hompageStyles.input_box}>
                    <input placeholder="Your Name" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    <input placeholder="Room ID" value={roomId} onChange={(e)=>setRoomId(e.target.value)} required/>
                </div>
                <div className={styles.lower_div}>        
                    <button type="button" className={hompageStyles.closingBtn} onClick={(e)=>createRoom(e.target)}>
                        CREATE ROOM
                    </button>
                    <button type="submit" className={hompageStyles.openingBtn} onClick={(e)=>enterRoom(e)}>
                        ENTER
                    </button>
                    <button type="button" className={hompageStyles.closingBtn} onClick={(e)=>joinRoom(e.target)}>
                        JOIN ROOM
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Homepage
