import {initialMessagesState} from "./messagesReducer";
import {MessageActions} from "./actions/actions";
import {InferActionTypes} from "../store";

export type ActionMessageTypes = InferActionTypes<typeof MessageActions>

export type initialStateMessagesType = typeof initialMessagesState


export type UserType = {
    name: string
    id: number
    img: string
}

export type MessageType = {
    message: string
    id: number
}