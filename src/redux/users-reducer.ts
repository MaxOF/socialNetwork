type LocationType = {
    city: string
    country: string
}

export type UserType = {
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
    users: [
        {id: 1, photoUrl: './cat.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: './cat.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: './cat.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, photoUrl: './cat.jpg', followed: true, fullName: 'Alexander', status: 'I am a boss too', location: {city: 'Kazan', country: 'Russia'}},
    ] as Array<UserType>
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