

type ActionsType = sendMessageActionType
export type sendMessageActionType = ReturnType<typeof sendMessageAC >


export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export type InitialStateType ={
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

let initialState: InitialStateType = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ]
    }

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            const body = {id: 10, message: action.newMessageBody}
            return {...state, messages: [...state.messages, body]}
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => ({
    type: 'SEND_MESSAGE',
    newMessageBody
}) as const

export default dialogsReducer;