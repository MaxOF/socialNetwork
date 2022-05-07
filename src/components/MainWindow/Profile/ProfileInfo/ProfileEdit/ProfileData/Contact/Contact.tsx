import React, {FC} from "react";
import style from "./Contact.module.scss";

import {ReturnComponentType} from "../../../../../../../api/api";

export const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}): ReturnComponentType => {
    return (
        <div className={style.formBlock}>
            <b>
                <a href={contactValue ? contactValue : ''}> {contactTitle}</a>:
            </b>
            {
                contactValue ?
                    <span>{contactValue}</span>
                    : <span>"Information is not provided"</span>
            }
        </div>
    )
}

export type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
