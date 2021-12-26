import React, {ChangeEvent} from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {ActionsType, DialogsType, MessagesType} from "../../redux/store";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    dialogsItems: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: PropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageAC(body))
    }

    return (
        <Dialogs
            dialogsItems={props.dialogsItems}
            messages={props.messages}
            newMessageBody={props.newMessageBody}
            dispatch={props.dispatch}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
        />
    )
}

export default DialogsContainer;