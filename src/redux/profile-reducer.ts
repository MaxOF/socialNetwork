export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = typeof initialState

export type AddPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
type ActionsType =
    AddPostActionType | updateNewPostTextActionType | setUserProfileType

let initialState = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 12},
        {id: 2, message: 'How is your it-kamasutra?', likesCount: 11},
        {id: 3, message: 'Its my third post', likesCount: 25},
        {id: 4, message: 'Yo', likesCount: 11},
        {id: 5, message: 'Yo', likesCount: 11},
        {id: 6, message: 'Yo', likesCount: 11}
    ] as Array<PostsType>,
    messageForNewPost: '',
    profile: null
};

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], messageForNewPost: ""}
        case 'UPDATE_NEW_POST_TEXT':
            return {...state, messageForNewPost: action.newText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
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
export const setUserProfile = (profile: any) => ({
    type: 'SET_USER_PROFILE',
    profile
}) as const


export default profileReducer;