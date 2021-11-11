import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='./avatar.jpg' alt='avatar'/>
            </div>
            <div>
                ava + descript
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;