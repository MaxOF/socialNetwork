import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

// @ts-ignore
window.store = store

export default store;