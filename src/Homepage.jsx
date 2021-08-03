import React,{useState} from 'react'
import styles from './Homepage.module.css'

function Homepage() {

    const [roomId, setRoomId] = useState('')
    const [hompageStyles, sethompageStyles] = useState({input_box:styles.initial_display ,closingBtn:styles.create_room_button, openingBtn:styles.initial_display})

    const createRoom = (e) =>{
        sethompageStyles({input_box:styles.upper_div ,closingBtn: styles.create_room_button + " " + styles.close_btn, openingBtn: styles.enter_btn})
    }

    const joinRoom = () =>{

    }

    return (
        <>
            <div className={styles.main}>
                <div className={hompageStyles.input_box}>
                    <input placeholder="Your Name" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                    <input placeholder="Room ID" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                </div>
                <div className={styles.lower_div}>        
                    <button className={hompageStyles.closingBtn} onClick={(e)=>createRoom(e.target)}>
                        CREATE ROOM
                    </button>
                    <button className={hompageStyles.openingBtn} onClick={(e)=>createRoom(e.target)}>
                        ENTER
                    </button>
                    <button className={hompageStyles.closingBtn} onClick={()=>joinRoom()}>
                        JOIN ROOM
                    </button>
                </div>
            </div>

        </>
    )
}

export default Homepage
