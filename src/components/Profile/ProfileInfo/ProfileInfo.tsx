import React from "react";

import s from './ProfileInfo.module.css';

const ProfileInfo: React.FC<{}> = () => {
    return (
        <div>
            <div>
                <img src='./avatar.jpg' alt='avatar'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descript
            </div>
        </div>
    )
}

export default ProfileInfo;