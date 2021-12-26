import {ActionsType, DialogsPageType, MessagesType} from "./store";


export type sendMessageActionType = ReturnType<typeof sendMessageAC >
export type updateNewMessageActionType = ReturnType<typeof updateNewMessageAC >

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

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