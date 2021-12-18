import React, {ChangeEvent} from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";

type PropsType = {
    store: StoreType
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map ((d) => {
        return <DialogItem name={d.name} id = {d.id} />
    })
    let messagesElements = state.messages.map((m) => {
           return <Message message={m.message} id ={m.id}/>
        })
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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