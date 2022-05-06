import React from 'react';
import style from "./DialogsItem.module.scss";

import {UserType} from "../../../../redux/messagesReducer/types";
import {ReturnComponentType} from "../../../../api/api";

const DialogsItem: React.FC<UserType> = ({img, name}): ReturnComponentType => {

    return (
        <div className={style.dialog}>
            <div>
                <img src={img} alt="dialogs item"/>
            </div>
            <div className={style.dialog__name}>
                {name}
            </div>
        </div>
    )
}

export default DialogsItem