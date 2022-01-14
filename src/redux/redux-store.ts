import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store

export default store;