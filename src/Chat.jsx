import React from 'react';
import Message from './Message';
import './Chat.css'
function Chat() {
    let mess = ['Hello', 'How are you!', 'I am Fine', 'Cool!']
    return (
        <>
            <h4>Room</h4>
            <div className="chat">
            {
                mess.map((m,mess) => {
                    return (
                        <Message message={m}/>
                    )
                } )
            }
            </div>
        </>
    )
}

export default Chat;
