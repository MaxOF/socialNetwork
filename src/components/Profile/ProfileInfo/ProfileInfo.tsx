import React from "react";

import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    profile: any
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='./avatar.jpg' alt='avatar'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + descript
            </div>
        </div>
    )
}

export default ProfileInfo;