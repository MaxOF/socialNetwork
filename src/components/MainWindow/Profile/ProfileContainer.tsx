import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";



import {AppStateType} from "../../../redux/store";
import {
    getAuthAuthorizedUserIDSelector, getAuthIsAuthSelector,
    getProfilePageProfileSelector,
    getProfilePageStatusSelector
} from "../../../selectors/selectors";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    updateUserStatus
} from "../../../redux/profileReducer/thunks/thunks";
import {InjectedProps, withRouter2} from "../../../utils/hoc/WithRouter";
import {withAuthRedirect} from "../../../utils/hoc/WithAuthRedirect";
import {Nullable} from "../../../api/api";
import {ProfileType} from "../../../redux/profileReducer/types";

class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId: Nullable<string> = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId) {
                //@ts-ignore
                this.props.history.push(PATH.LOGIN)
            }
        }

        if (!userId) {
            throw new Error("ID should be exists")
        } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsProfileType => {
    return {
        profile: getProfilePageProfileSelector(state),
        isAuth: getAuthIsAuthSelector(state),
        status: getProfilePageStatusSelector(state),
        authorizedUserID: getAuthAuthorizedUserIDSelector(state),
    }
}

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer)




export type MapStateToPropsProfileType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserID: Nullable<string>
}

export type MapDispatchToProps = {
    getUserProfile: (userId: Nullable<string>) => void
    getUserStatus: (userId: Nullable<string>) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

export type ProfileContainerPropsType = MapStateToPropsProfileType & MapDispatchToProps & InjectedProps

//Profile=========

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}
