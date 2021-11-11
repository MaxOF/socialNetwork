import React from "react";

import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='./avatarPost.jpg' alt='avatar'/>
                    {props.message}
                    <div>
                        <span>like: {props.countLike}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Post;