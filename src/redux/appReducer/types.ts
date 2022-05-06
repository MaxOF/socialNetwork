import {InferActionTypes} from "../store";
import {initialAppState} from "./app-reducer";
import {AppAction} from "./actions/actions";

export type ActionAppReducerType = InferActionTypes<typeof AppAction>

export type initialStateAppType = typeof initialAppState