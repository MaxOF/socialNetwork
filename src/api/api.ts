import axios from "axios";
import {ReactElement} from "react";
import {UserType} from "../redux/usersReducer/types";
import {PhotosType, ProfileType} from "../redux/profileReducer/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b588c31f-bc7d-4fbb-8788-c7e4777eca7b"
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5, term: string = "", friend: Nullable<boolean> = null) {
        const endpoint = `users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)
        return instance.get<GetItemType>(endpoint)
            .then(res => res.data)
    },
    follow(userId: string) {
        const endpoint = `follow/${userId}`
        return instance.post<APIResponseType>(endpoint)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        const endpoint = `follow/${userId}`
        return instance.delete<APIResponseType>(endpoint)
            .then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        const endpoint = `profile/${userId}`
        return instance.get<ProfileType>(endpoint)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        const endpoint = `profile/status/${userId}`
        return instance.get<string>(endpoint)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        debugger
        const endpoint = `profile/status`
        return instance.put<APIResponseType>(endpoint, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const endpoint = `profile/photo`
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(endpoint, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        const endpoint = `profile`
        return instance.put<APIResponseType>(endpoint, profile).then(res => res.data)
    },
}

export const authAPI = {
    getAuth() {
        const endpoint = `auth/me`;
        return instance.get<APIResponseType<MeResponseType>>(endpoint)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: Nullable<string> = null) {
        const endpoint = `auth/login`;
        return instance.post<APIResponseType<LoginResponseDataType>>(endpoint, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        const endpoint = `auth/login`;
        return instance.delete<APIResponseType>(endpoint)
            .then(res => res.data)
    },
}

export const securityApi = {
    getCaptchaUrl() {
        const endpoint = `security/get-captcha-url`
        return instance.get<captchaType>(endpoint)
            .then(res => res.data)
    },
}


// General Types>>>>>>>>>>>>>>>>>>>>>>>>>>

export type Nullable<T> = T | null
export type ReturnComponentType = Nullable<ReactElement>;
export type Undetectable<T> = T | undefined

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: string[]
}

export type GetItemType = {
    items: Array<UserType>
    totalCount: number
    error: Nullable<string>
}


//Profile types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export type SavePhotoResponseDataType = {
    photos: PhotosType
}
//Captcha types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export type captchaType = {
    url: string
}
//Auth types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export type MeResponseType = {
    id: string
    email: string
    login: string
}

export type LoginResponseDataType = {
    userId: number
}