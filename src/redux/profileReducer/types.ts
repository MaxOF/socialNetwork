import {BaseThunkType, InferActionTypes} from "../store";
import {stopSubmit} from "redux-form";
import {initialProfileState} from "./profile-reducer";
import {Actions} from "./actions/actions";

export type ThunkProfileType = BaseThunkType<ActionProfileTypes | ReturnType<typeof stopSubmit>>

export type initialStateProfileType = typeof initialProfileState

export type ActionProfileTypes = InferActionTypes<typeof Actions>

export type PostType = {
    message: string
    likesCount: number
    id: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
} | null

export type PhotosType = {
    small: string
    large: string
}