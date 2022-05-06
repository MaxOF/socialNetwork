import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profileReducer/profile-reducer";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export type ProfileType = {
    aboutMe: string
    "contacts": {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": string,
    "photos": {
        "small": string,
        "large": string
    }
}

type PathParamsType = {
    params: {
        userId: string
    }
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    setUserProfile: (profile: ProfileType) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = PathParamsType & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId as string
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
           <Profile
               {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
           />
        )
    }
}

const withRouter = (WrappedComponent: any) => {
    return (props: object) => {
        const params = useParams()
        return (
            <WrappedComponent {...props}
                              params={params}
            />
        );
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
