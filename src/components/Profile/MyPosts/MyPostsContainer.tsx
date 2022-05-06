import React from "react";
import {addPostAC, InitialStateType} from "../../../redux/profileReducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {
    addPost: (addTextPost: string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: (addTextPost: string) => {
            dispatch(addPostAC(addTextPost));
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
