import React,{useState} from 'react'
import styles from './Homepage.module.css'
import {firebase,db} from './firebase';
import { Redirect,useHistory  } from 'react-router';
function Homepage() {

    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')
    
    const [hompageStyles, sethompageStyles] = useState({input_box:styles.initial_display ,closingBtn:styles.create_room_button, openingBtn:styles.initial_display})
    const history = useHistory()
    
    const createRoom = (e) =>{
        sethompageStyles({input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const joinRoom = () =>{

    }

    const enterRoom = () =>{
        db.collection("rooms").add({
            room_id: roomId,
            messages: []
        })
        localStorage.setItem("name",username)
        localStorage.setItem("room_id",roomId)
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
                    <button type="button" className={hompageStyles.closingBtn} onClick={()=>joinRoom()}>
                        JOIN ROOM
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Homepage
