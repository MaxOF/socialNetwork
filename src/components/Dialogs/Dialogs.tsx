import React, {ChangeEvent} from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {ActionsType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
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
        debugger
        props.store.dispatch(sendMessageAC())

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageAC(body))
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