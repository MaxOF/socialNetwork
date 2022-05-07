import {Nullable} from "../../api/api";

import {ActionProfileTypes, initialStateProfileType, PostType, ProfileType} from "./types";
import {ProfileReducerEnum} from "./constants";

export const initialProfileState = {
    posts: [
        {message: "Hey, how is it going?", likesCount: 12, id: 1},
        {message: "If you are a frontend dev, follow me", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as Nullable<ProfileType>,
    status: "",
}

export const profileReducer = (state = initialProfileState, action: ActionProfileTypes): initialStateProfileType => {

    switch (action.type) {
        case ProfileReducerEnum.ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.payload.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case ProfileReducerEnum.DELETED_POST: {
            return {
                ...state,
                posts: state.posts.filter(f => f.id !== action.payload.postId),
            }
        }
        case ProfileReducerEnum.SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
        case ProfileReducerEnum.SET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ProfileReducerEnum.SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload.photos} as ProfileType
            }
        }
        default:
            return state
    }
}