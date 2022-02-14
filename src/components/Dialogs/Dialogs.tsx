import React, {ChangeEvent} from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm, InjectedFormProps} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {


    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = state.messages.map((m) => {
        return <Message message={m.message} id={m.id}/>
    })
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
        </div>
    )
}
type FormDataType = {
    onMessageBody: string
}
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="onMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;