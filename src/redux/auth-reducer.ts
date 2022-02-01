import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {toggleIsFollowingProgress, unfollowSuccess} from "./users-reducer";
import axios from "axios";

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
type ActionsType =
    setAuthUserDataType

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'SET_USER_DATA',
    data: {
        userId,
        email,
        login
    }
}) as const

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
