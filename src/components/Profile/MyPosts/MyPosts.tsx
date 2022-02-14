import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type PropsType = {
    profilePage: any
    addPost: (addTextPost: string) => void
}

const MyPosts = (props: PropsType) => {
    let state = props.profilePage
    let postsElements = state.posts.map((p: any) => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })


    const onAddPost = (values: FormDataType) => {
        debugger
        console.log(values)
        props.addPost(values.addTextPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="addTextPost" placeholder="Enter your post" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
type FormDataType = {
    addTextPost: string
}
const AddPostFormRedux = reduxForm<FormDataType>({form: "addPostsForm"})(AddPostForm)

export default MyPosts;
