import React from "react";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextAC(newText)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
