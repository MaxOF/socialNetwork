import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileType} from "../components/Profile/ProfileContainer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = typeof initialState

export type AddPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>
type ActionsType =
    AddPostActionType | updateNewPostTextActionType | setUserProfileType | setStatusType

let initialState = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 12},
        {id: 2, message: 'How is your it-kamasutra?', likesCount: 11},
        {id: 3, message: 'Its my third post', likesCount: 25},
        {id: 4, message: 'Yo', likesCount: 11},
        {id: 5, message: 'Yo', likesCount: 11},
        {id: 6, message: 'Yo', likesCount: 11}
    ] as Array<PostsType>,
    messageForNewPost: '',
    profile: {
        aboutMe: "Good man",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com",
            twitter: "https://twitter.com",
            instagram: "instagra.com",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: '21655',
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: "Write your status here" as string
};

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], messageForNewPost: ""}
        case 'UPDATE_NEW_POST_TEXT':
            return {...state, messageForNewPost: action.newText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = () => ({
    type: 'ADD_POST'
}) as const
export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: newText
}) as const
//change profile type
export const setUserProfile = (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile
}) as const
export const setStatus = (status: string) => ({
    type: 'SET_STATUS',
    status
}) as const
//check the type of userID string or number
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;