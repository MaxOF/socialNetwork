import React from "react";

import s from './Post.module.css'

type MessageType = {
    message: string
    countLike: number
}


const Post: React.FC<MessageType> = (props) => {
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