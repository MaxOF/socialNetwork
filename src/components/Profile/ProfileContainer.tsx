import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


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
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = PathParamsType & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        console.log(this.props.params.userId)
        let userId = this.props.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }

}

const withRouter = (WrappedComponent: typeof React.Component) => {
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
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
