import React from "react";
import {NavLink} from "react-router-dom";

import s from './../Dialogs.module.css';
import {DialogsType} from "../../../redux/store";

const DialogItem: React.FC <DialogsType> = (props) => {
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