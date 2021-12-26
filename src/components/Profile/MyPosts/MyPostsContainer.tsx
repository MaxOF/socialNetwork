import React, {ChangeEvent} from "react";
import {
    ActionsType,
    PostsType,
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    allPosts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    messageForNewPost: string
}

const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC());
    }
    const newTextChangeHandler = (newText: string) => {
        let action = updateNewPostTextAC(newText)
        props.dispatch(action)
    }

    return (
        <MyPosts
        allPosts={props.allPosts}
        dispatch={props.dispatch}
        messageForNewPost={props.messageForNewPost}
        updateNewPostText={newTextChangeHandler}
        addPost={addPost}
    />)
};

export default MyPostsContainer;
