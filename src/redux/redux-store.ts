import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    ProfilePageReducer: profileReducer,
    DialogsPageReducer: dialogsReducer
})
export type AppStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

let store = createStore(reducers);

export default store;