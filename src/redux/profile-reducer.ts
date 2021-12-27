import {ActionsType} from "./store";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = typeof initialState

export type AddPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

let initialState = {
        posts: [
            {id: 1, message: 'Its my first post', likesCount: 12},
            {id: 2, message: 'How is your it-kamasutra?', likesCount: 11},
            {id: 3, message: 'Its my third post', likesCount: 25},
            {id: 4, message: 'Yo', likesCount: 11},
            {id: 5, message: 'Yo', likesCount: 11},
            {id: 6, message: 'Yo', likesCount: 11}
        ] as Array<PostsType>,
        messageForNewPost: ''
    };

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], messageForNewPost: ""}
        case 'UPDATE_NEW_POST_TEXT':
            return {...state, messageForNewPost: action.newText}
        default:
            return state
    }
}

export const addPostAC = () => ({
    type: 'ADD_POST'
}) as const
export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: newText
}) as const

export default profileReducer;