import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


type InitialStateType = {
    userId: string | null
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
                ...action.payload,
            }
        default:
            return state
    }
}

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {
        userId,
        email,
        login,
        isAuth
    }
}) as const

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}



export const getLogin = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}