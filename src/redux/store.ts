import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "./usersReducer/users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, RT = Promise<void>> = ThunkAction<RT, AppStateType, unknown, A>

// @ts-ignore
window.store = store

export default store;