import {AppAction} from "../actions/actions";
import {getAuthUserData} from "../../authReducer/thunks/thunks";
import {Dispatch} from "redux";

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(AppAction.initializedSuccess())
        })
}