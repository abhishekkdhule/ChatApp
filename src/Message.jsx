import React, { useState } from 'react'
import styles from './Message.module.css'

function Message(props) {
    const username = localStorage.getItem("name")
    const messageOwnerStyle = {messageStyle:styles.main}
    // console.log(username, )
    if(username === props.message.name) {
        messageOwnerStyle['messageStyle'] = styles.main_self
    }
    return (
        <>
            <div className={messageOwnerStyle.messageStyle}>
                <h6 className="m-0">{props.message.name}</h6><br/>
                <p className="m-0">{props.message.message}</p>
            </div>
        </>
    )
}

export default Message
