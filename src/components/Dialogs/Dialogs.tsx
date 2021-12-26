import React, {ChangeEvent} from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {ActionsType, DialogsType, MessagesType} from "../../redux/store";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsItems: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PropsType) => {

       let dialogsElements = props.dialogsItems.map ((d) => {
        return <DialogItem name={d.name} id = {d.id} />
    })
    let messagesElements = props.messages.map((m) => {
           return <Message message={m.message} id ={m.id}/>
        })
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        debugger
        props.dispatch(sendMessageAC())

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;