import axios from "axios";
import {ReactElement} from "react";
import {UserType} from "../redux/usersReducer/types";


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
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

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
