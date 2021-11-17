import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {DialogsPageType} from "../../redux/state";

type PropsType = {
    state: DialogsPageType
}

const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map ((d) => {
        return <DialogItem name={d.name} id = {d.id} />
    })
    let messagesElements = props.state.messages.map((m) => {
           return <Message message={m.message} id ={m.id}/>
        })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;