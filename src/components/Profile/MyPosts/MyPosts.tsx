import React from "react";

import Post from "./Post/Post";

import s from './MyPosts.module.css';

const MyPosts: React.FC<{}> = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} countLike={15}/>
                <Post message={"Its my first post"} countLike={20}/>
                <Post message={"Its my second post"} countLike={30}/>
            </div>
        </div>
    )
};

export default MyPosts;
