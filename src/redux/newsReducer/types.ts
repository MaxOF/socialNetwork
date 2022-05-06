import {initialNewsState} from "./newsReducer";
import {InferActionTypes} from "../store";
import {NewsActions} from "./actions/actions";

export type initialNewsStateType = typeof initialNewsState

export type ActionNewsTypes = InferActionTypes<typeof NewsActions>

export type NewsType = {
    id: string
    image: string
    text: string
    title: string
}

export type ImagesType = {
    imageForBackground: string
}
