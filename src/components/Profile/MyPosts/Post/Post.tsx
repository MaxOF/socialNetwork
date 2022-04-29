import React from "react";

import s from './Post.module.css'

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='./avatarPost.jpg' alt='avatar'/>
                    {props.message}
                    <div>
                        <span>like: {props.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Post;