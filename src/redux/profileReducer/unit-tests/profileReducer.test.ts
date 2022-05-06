import {profileReducer} from "../profile-reducer";
import {PostType, ProfileType} from "../types";
import {Actions} from "../actions/actions";

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurs are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: '',
}

test("length message should been increment", () => {

    const postMessage: string = "new post"
    let newState = profileReducer(initialState, Actions.addPost(postMessage))
    const length: number = 3;

    expect(newState.posts.length === length).toBe(true)

})

test("title message should be correct", () => {
    const postMessage: string = "new post"
    let newState = profileReducer(initialState, Actions.addPost(postMessage))

    expect(newState.posts[2].message).toBe(postMessage)

})

test("after delete length should be decrement", () => {

    const postNumber: number = 2
    let newState = profileReducer(initialState, Actions.deletePost(postNumber))
    const length: number = 1;

    expect(newState.posts.length === length).toBe(true)

})

test("after delete length should not be decrement", () => {

    const postNumber: number = 4
    let newState = profileReducer(initialState, Actions.deletePost(postNumber))
    const length: number = 1;

    expect(newState.posts.length === length).toBe(false)

})