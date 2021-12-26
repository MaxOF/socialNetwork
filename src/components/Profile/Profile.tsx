import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    allPosts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    messageForNewPost: string
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                allPosts={props.allPosts}
                dispatch={props.dispatch}
                messageForNewPost={props.messageForNewPost}
            />
        </div>
    )
}

export default Profile;