import React from "react";

import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../ProfileContainer"
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='large photo'/>
                ava + descript
            </div>
            <ProfileStatus status={'Hello'} />
        </div>
    )
}

export default ProfileInfo;