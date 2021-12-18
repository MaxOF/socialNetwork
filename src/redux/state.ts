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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _onChange:  any
    getState: () => RootStateType
    _addPost: (postText: string) => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: (state?: RootStateType) => void) => void
    dispatch: (action: any) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ]
    }
},
    _onChange () {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe (observer: (state: RootStateType) => void) {
        this._onChange = observer
    },

    _addPost () {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._onChange()
    },
    _updateNewPostText (newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this._addPost(action.postText);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store;