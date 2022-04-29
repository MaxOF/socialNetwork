import {Dispatch} from "redux";


type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}
type ActionsType =
    setInitializedType

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type setInitializedType = ReturnType<typeof setInitialized>
export const setInitialized = () => ({
    type: 'SET_INITIALIZED'
}) as const

export const initializeApp = () => (dispatch: Dispatch) => {

}
