import React,{useState} from 'react'
import styles from './Homepage.module.css'
import {firebase, db} from './firebase';
import { Redirect, useHistory  } from 'react-router';

function Homepage() {

    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')
    
    const [hompageStyles, sethompageStyles] = useState({roomid:"",input_box:styles.initial_display ,closingBtn:styles.create_room_button, openingBtn:styles.initial_display})
    const history = useHistory()
    
    const createRoom = (e) => {
        sethompageStyles({roomid:styles.room_id, input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const joinRoom = () => {
        sethompageStyles({input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const enterRoom = (e) => {
        e.preventDefault()
        let room_id = localStorage.getItem("room_id")
        setRoomId(room_id)
        
        if(roomId.length == 0) {
            let roomRef = db.collection('rooms').doc()
            roomRef.set({
                room_id: roomRef.id,
                messages: []
            })
            localStorage.setItem("room_id",roomRef.id)
            localStorage.setItem("name",username)
        } else {
            let roomRef = db.collection('rooms').doc(roomId)
            // alert(roomRef)
            localStorage.setItem("room_id",roomRef.id)
            localStorage.setItem("name",username)
        }
        history.push("/chat")
                    
        // db.collection("rooms").add({
        //     room_id: roomId,
        //     messages: []
        // })
        // .then((docRef) => localStorage.setItem("room_id",docRef.id))
        
      
    }
    return (
        <>
        <form>
            <div className={styles.main}>
                <div className={hompageStyles.input_box}>
                    <input placeholder="Your Name"  value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    <input placeholder="Room ID" className={hompageStyles.roomid} value={roomId} onChange={(e)=>setRoomId(e.target.value)} required/>
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
