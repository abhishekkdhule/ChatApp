import React, { useState } from 'react'
import styles from './Message.module.css'

function Message(props) {
    const username = localStorage.getItem("name")
    const messageOwnerStyle = {messageStyle:styles.main}
    if(username === props.name) {
        messageOwnerStyle['messageStyle'] = styles.main_self
    }
    return (
        <>
            <div className={messageOwnerStyle.messageStyle}>
                <h6 className="m-0">{props.name}</h6><br/>
                <small className="m-0">{props.message}</small>
            </div>
        </>
    )
}

export default Message
