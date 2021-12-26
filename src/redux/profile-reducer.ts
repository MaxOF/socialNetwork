import {ActionsType, PostsType, ProfilePageType} from "./store";


export type AddPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ActionsType) => {

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