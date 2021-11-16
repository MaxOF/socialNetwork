import React from "react";
import {NavLink} from "react-router-dom";

import s from './../Dialogs.module.css';

export type DialogType = {
    id: number,
    name: string
}

const DialogItem: React.FC <DialogType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id} className={(navDate) =>
                navDate.isActive ? s.active : ''}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;