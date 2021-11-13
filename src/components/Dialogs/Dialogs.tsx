import React from "react";
import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css';

export type PropsType = {
    name?: string
    id?: number
    message?: string
    dialogsData?: Array<{id: number, name:string}>
};



const DialogItem: React.FC <PropsType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id} className={(navDate) =>
                navDate.isActive ? s.active : ''}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message: React.FC <PropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ={dialogsData[0].name} id= {dialogsData[0].id} />
                <DialogItem name ={dialogsData[1].name} id= {dialogsData[1].id} />
                <DialogItem name ={dialogsData[2].name} id= {dialogsData[2].id} />
                <DialogItem name ={dialogsData[3].name} id= {dialogsData[3].id} />
                <DialogItem name ={dialogsData[4].name} id= {dialogsData[4].id} />
                <DialogItem name ={dialogsData[5].name} id= {dialogsData[5].id} />

            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is it your it-kamasutra' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs;