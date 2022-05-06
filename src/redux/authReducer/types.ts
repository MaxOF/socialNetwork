import {BaseThunkType, InferActionTypes} from "../store";
import {AuthActions} from "./actions/actions";
import {FormAction} from "redux-form";
import {initialAuthState} from "./authReducer";
import {Nullable} from "../../api/api";

export type ThunkType = BaseThunkType<ActionAuthReducerType | FormAction>

export type initialAuthStateType = typeof initialAuthState

export type ActionAuthReducerType = InferActionTypes<typeof AuthActions>

export type dataType = {
    userId: Nullable<string>
    email: Nullable<string>
    login: Nullable<string>
}