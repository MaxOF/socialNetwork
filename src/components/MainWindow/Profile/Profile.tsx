import React from 'react';
import style from "./Profile.module.scss"

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


import {ReturnComponentType} from "../../../api/api";
import {ProfilePropsType} from "./ProfileContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}): ReturnComponentType => {

    return (
        <section className={style.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            {
                isOwner
                && <MyPostsContainer/>
            }
        </section>
    )
}

export default Profile
