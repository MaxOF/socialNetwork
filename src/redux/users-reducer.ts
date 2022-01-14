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
export type InitialStateType = typeof initialState

export type followType = ReturnType<typeof followAC>
export type unfollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type settCurrentPageType = ReturnType<typeof settCurrentPageAC>
export type setUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>

type ActionsType = followType | unfollowType | setUsersType | settCurrentPageType | setUsersTotalCountType | toggleIsFetchingType

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    payload: {
        userId
    }
}) as const
export const unfollowAC = (userId: number) => ({
    type: 'UNFOLLOW',
    payload: {
        userId
    }
}) as const
export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET_USERS',
    payload: {
        users
    }
}) as const

export const settCurrentPageAC = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    payload: {
        currentPage
    }
}) as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: 'SET_USERS_TOTAL_COUNT',
    payload: {
        totalUsersCount
    }
}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    payload: {
        isFetching
    }
}) as const