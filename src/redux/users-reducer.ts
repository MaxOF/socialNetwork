import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type LocationType = {
    city: string
    country: string
}
type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    name: string;
    photos: PhotoType;
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type followType = ReturnType<typeof followSuccess>
export type unfollowType = ReturnType<typeof unfollowSuccess>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>
export type getUsersType = ReturnType<typeof getUsers>


type ActionsType =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setUsersTotalCountType
    | toggleIsFetchingType
    | toggleIsFollowingProgressType

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: action.payload.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({
    type: 'FOLLOW',
    payload: {
        userId
    }
}) as const
export const unfollowSuccess = (userId: number) => ({
    type: 'UNFOLLOW',
    payload: {
        userId
    }
}) as const
export const setUsers = (users: Array<UserType>) => ({
    type: 'SET_USERS',
    payload: {
        users
    }
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    payload: {
        currentPage
    }
}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_USERS_TOTAL_COUNT',
    payload: {
        totalUsersCount
    }
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    payload: {
        isFetching
    }
}) as const
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    payload: {
        isFetching,
        userId,
    }
}) as const

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}