import {AppStateType} from "../redux/store";
import {Nullable, Undetectable} from "../api/api";
import {initialStateMessagesType} from "../redux/messagesReducer/types";
import {NewsType} from "../redux/newsReducer/types";
import {initialStateProfileType, ProfileType} from "../redux/profileReducer/types";
import {FilterType, UserType} from "../redux/usersReducer/types";
import {createSelector} from "reselect";

//App selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getInitializedAppSelector = (state: AppStateType): boolean => {
    return state.app.initialized
}

//Auth selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getAuthIsAuthSelector = (state: AppStateType): boolean => {
    return state.auth.isAuth
}

export const getAuthAuthorizedUserIDSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.data.userId
}

export const getAuthCaptchaUrlSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.captchaUrl
}

export const getAuthDataLoginSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.data.login
}

//Dialog selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getMessagesPageSelector = (state: AppStateType): initialStateMessagesType => {
    return state.messagesPage
}

//News selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getNewsSelector = (state: AppStateType): NewsType[] => {
    return state.news.news
}

//Profile selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getProfilePageSelector = (state: AppStateType): initialStateProfileType => {
    return state.profilePage
}

export const getProfilePageProfileSelector = (state: AppStateType): ProfileType => {
    return state.profilePage.profile
}

export const getProfilePageStatusSelector = (state: AppStateType): string => {
    return state.profilePage.status
}

export const getProfilePageProfilePhotosLargeSelector = (state: AppStateType): Nullable<Undetectable<string>> => {
    return state.profilePage.profile?.photos.large
}


//Users selector >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const getUsersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users: UserType[]): Array<UserType> => {
    return users.filter(user => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<string> => {
    return state.usersPage.followingInProgress
}

export const getUsersFilter = (state: AppStateType): FilterType => {
    return state.usersPage.filter
}
