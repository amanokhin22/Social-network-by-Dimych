import React from "react";
import s from './Messages.module.css'


const Message = (props) => {
    return (
        <div className={s.messages}>{props.message}

            <div className={s.messages}>

            </div>
        </div>
    )
};

export default Message;