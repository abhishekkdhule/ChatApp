import React,{useState} from 'react'
import './Homepage.css'

function Homepage() {
    const [roomId,setRoomId] = useState('')

    const createRoom = () =>{

    }

    const joinRoom = () =>{

    }

    return (
        <>
            <div className="main">
                <div className="upper_div">
                    <input value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                </div>
                <div className="lower_div">        
                    <button className="create_room_button" onClick={()=>createRoom()}>
                        CREATE ROOM
                    </button>
                    <button className="join_room_button" onClick={()=>joinRoom()}>
                        JOIN ROOM
                    </button>
                </div>
            </div>

        </>
    )
}

export default Homepage
