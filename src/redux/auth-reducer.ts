import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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
    setAuthUserDataType | setAuthLoginData

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'SET_LOGIN_DATA':
            return {
                ...state,
                ...action.data
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

export type setAuthLoginData = ReturnType<typeof setLoginData>
export const setLoginData = (email: string, password: string, rememberMe: boolean, captcha: boolean) => ({
    type: 'SET_LOGIN_DATA',
    data: {
        email,
        password,
        rememberMe,
        captcha
    }
}) as const
export const getLoginData = () => {
    return (dispatch: Dispatch) => {
        authAPI.login()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {email, password, rememberMe, captcha} = response.data.data
                    dispatch(setLoginData(email, password, rememberMe, captcha));
                }
            })
    }
}
