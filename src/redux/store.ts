import {Action, applyMiddleware, combineReducers, createStore} from "redux";

import {usersReducer} from "./usersReducer/users-reducer";

import thunkMiddleWare, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer/app-reducer";
import {newsReducer} from "./newsReducer/newsReducer";
import {profileReducer} from "./profileReducer/profile-reducer";
import {messagesReducer} from "./messagesReducer/messagesReducer";
import {authReducer} from "./authReducer/authReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    news: newsReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, RT = Promise<void>> = ThunkAction<RT, AppStateType, unknown, A>

// @ts-ignore
window.store = store