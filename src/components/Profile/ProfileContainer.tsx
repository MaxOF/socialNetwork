import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {useParams, Navigate} from "react-router-dom";
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
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = PathParamsType & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = '21656'
        }
        this.props.getUserProfile(userId)
        //use DAL
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
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
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
