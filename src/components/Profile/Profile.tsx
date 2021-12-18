import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import state, {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
    messageForNewPost: string
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                messageForNewPost={props.messageForNewPost}
            />
        </div>
    )
}

export default Profile;