import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

import {initialStateProfileType} from "../../../../redux/profileReducer/types";
import {getProfilePageSelector} from "../../../../selectors/selectors";
import {AppStateType} from "../../../../redux/store";
import {Actions} from "../../../../redux/profileReducer/actions/actions";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: getProfilePageSelector(state)
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    onAddPost: Actions.addPost
})(MyPosts)

//types=============

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    profilePage: initialStateProfileType
}

type MapDispatchToProps = {
    onAddPost: (newPostText: string) => void
}