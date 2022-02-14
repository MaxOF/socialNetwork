import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b588c31f-bc7d-4fbb-8788-c7e4777eca7b"
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`unfollow/${userId}`)
    },
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
    }
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
    login() {
        return instance.post(`auth/login`)
    }
}
