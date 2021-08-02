import React,{useState} from 'react'
import styles from './Homepage.module.css'

function Homepage() {

    const [roomId, setRoomId] = useState('')
    const [createRoomBtnStyle, setcreateRoomBtnStyle] = useState(styles.create_room_button)

    const createRoom = () =>{
        setcreateRoomBtnStyle({
            
        })
    }

    const joinRoom = () =>{

    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.upper_div}>
                    <input placeholder="Room Id" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                </div>
                <div className={styles.lower_div}>        
                    <button className={createRoomBtnStyle} onClick={()=>createRoom()}>
                        CREATE ROOM
                    </button>
                    <button className={styles.join_room_button} onClick={()=>joinRoom()}>
                        JOIN ROOM
                    </button>
                </div>
            </div>

        </>
    )
}

export default Homepage
