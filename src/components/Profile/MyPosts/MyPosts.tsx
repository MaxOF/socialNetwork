import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {
    ActionsType,
    PostsType,
} from "../../../redux/store";


type PropsType = {
    allPosts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    messageForNewPost: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const MyPosts = (props: PropsType) => {
    console.log(props.messageForNewPost)
    let postsElements = props.allPosts.map((p) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })


    const onAddPost = () => {
        props.addPost()
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
