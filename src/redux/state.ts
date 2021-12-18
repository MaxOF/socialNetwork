export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber:  any
    getState: () => RootStateType
    _addPost: (postText: string) => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: (state?: RootStateType) => void) => void
    dispatch: (action: any) => void
}

export type addPostActionType = {
    type: 'ADD-POST'
}
export type updateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionsType = addPostActionType | updateNewPostTextType


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store: StoreType = {
    _state: {
    profilePage : {
        posts: [
            {id: 1, message: 'Its my first post', likesCount: 12},
            {id: 2, message: 'How is your it-kamasutra?', likesCount: 11},
            {id: 3, message: 'Its my third post', likesCount: 25},
            {id: 4, message: 'Yo', likesCount: 11},
            {id: 5, message: 'Yo', likesCount: 11},
            {id: 6, message: 'Yo', likesCount: 11}
        ],
        messageForNewPost: ''
    },
    dialogsPage : {
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
},
    _callSubscriber () {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe (observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    _addPost () {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state)
    },
    _updateNewPostText (newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this._addPost(action.postText);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY ) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (newText: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default store;