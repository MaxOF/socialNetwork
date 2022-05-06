import {usersReducer} from "../users-reducer";
import {initialUsersStateType, UserType} from "../types";
import {UserActions} from "../actions/usersActions";
import {Nullable} from "../../../api/api";


let state: initialUsersStateType

beforeEach(() => {
    state = {
        users: [
            {id: "0", name: "Oleg 0", followed: false, photos: {small: null, large: null}, status: "status 0"},
            {id: "1", name: "Oleg 1", followed: false, photos: {small: null, large: null}, status: "status 0"},
            {id: "2", name: "Oleg 2", followed: true, photos: {small: null, large: null}, status: "status 0"},
            {id: "3", name: "Oleg 3", followed: true, photos: {small: null, large: null}, status: "status 0"},
        ] as UserType[],
        filter: {
            term: '',
            friend: null as Nullable<boolean>,
        },
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as string[],
    }
})

test("follow success", () => {

    const followId: string = "1"
    const newState = usersReducer(state, UserActions.followSuccess(followId))

    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[0].followed).toBeFalsy()
})

test("unfollow success", () => {

    const unFollowId: string = "3"
    const newState = usersReducer(state, UserActions.unfollowSuccess(unFollowId))

    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})