import React from "react";

import Post from "./Post/Post";

import s from './MyPosts.module.css';

const MyPosts: React.FC<{}> = () => {

    let posts = [
        {id: 1, message: 'Its my first post', likesCount: 12},
        {id: 2, message: 'How is your it-kamasutra?', likesCount: 11},
        {id: 3, message: 'Its my third post', likesCount: 25},
        {id: 4, message: 'Yo', likesCount: 11},
        {id: 5, message: 'Yo', likesCount: 11},
        {id: 6, message: 'Yo', likesCount: 11}
    ]

    let postsElements = posts.map ((p) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })

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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
