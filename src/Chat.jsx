import React from 'react';
import Message from './Message';
import './Chat.css'
function Chat() {
    return (
        <>
            <h4>Room</h4>
            <div className="chat">
                <Message/>
            </div>
        </>
    )
}

export default Chat;
