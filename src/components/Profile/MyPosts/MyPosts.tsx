import React, {ChangeEvent} from "react";

import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {
    ActionsType,
    PostsType,
    updateNewPostTextActionCreator,
} from "../../../redux/state";




type PropsType = {
    posts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    messageForNewPost: string
}

const MyPosts = (props: PropsType) => {
    console.log(props.messageForNewPost)
    let postsElements = props.posts.map((p) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })


    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
