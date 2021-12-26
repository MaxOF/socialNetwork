import {ActionsType, DialogsPageType, MessagesType} from "./store";


export type sendMessageActionType = ReturnType<typeof sendMessageAC >
export type updateNewMessageActionType = ReturnType<typeof updateNewMessageAC >

let initialState: DialogsPageType = {
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
        ],
        newMessageBody: ''
    }

const dialogsReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.body}
        case 'SEND_MESSAGE':
            debugger
            const body: MessagesType = {id: 10, message: state.newMessageBody}
            return {...state, messages: [...state.messages, body], newMessageBody: ''}
        default:
            return state
    }
}

export const sendMessageAC = () => ({
    type: 'SEND_MESSAGE'
}) as const
export const updateNewMessageAC= (body: string) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body
}) as const

export default dialogsReducer;