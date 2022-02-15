import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsContorls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export const Dialogs = (props: DialogsPropsType) => {


    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = state.messages.map((m) => {
        return <Message message={m.message} id={m.id}/>
    })


    let addMessage = (values: FormDataType) => {
        console.log(values)
        props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addMessage} />
            </div>
        </div>
    )
}
type FormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;