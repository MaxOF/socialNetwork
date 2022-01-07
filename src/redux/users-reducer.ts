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

type ActionsType = followType | unfollowType | setUsersType

let initialState = {
    users: [] as Array<UserType>
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
                ...state, users: [...state.users, ...action.payload.users]
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