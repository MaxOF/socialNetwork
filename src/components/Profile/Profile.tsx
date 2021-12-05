import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import s from './Profile.module.css';
import state, {ProfilePageType, updateNewPostText} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                messageForNewPost={props.messageForNewPost}
            />
        </div>
    )
}

export default Profile;