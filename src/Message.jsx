import React from 'react'
import './Message.css'

function Message(props) {
    console.log("called")
    return (
        <>
            <div className="main mt-4">
                <h6 className="m-0">{props.message.name}</h6><br/>
                <p className="m-0">{props.message.message}</p>
            </div>
        </>
    )
}

export default Message
