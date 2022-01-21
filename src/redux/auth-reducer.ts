
type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
type ActionsType =
    setAuthUserDataType

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'SET_USER_DATA',
    data: {
        userId,
        email,
        login
    }
}) as const