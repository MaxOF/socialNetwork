import React from "react";

import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../ProfileContainer"

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='./ava.jpg' alt='avatar'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='large photo'/>
                ava + descript
            </div>
        </div>
    )
}

export default ProfileInfo;