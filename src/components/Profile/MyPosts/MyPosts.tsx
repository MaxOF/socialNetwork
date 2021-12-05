import React, {ChangeEvent} from "react";

import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}

const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map((p) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })


    const addPost = () => {
        props.addPost(props.messageForNewPost);
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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
