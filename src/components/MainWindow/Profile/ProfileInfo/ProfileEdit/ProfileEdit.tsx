import React from 'react';
import style from "../ProfileInfo.module.scss";


import {ReturnComponentType} from "../../../../../api/api";
import {ProfileType} from "../../../../../redux/profileReducer/types";
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";

export const ProfileEdit: React.FC<ProfileEditPropsType> = ({
                                                         editMode,
                                                         profile,
                                                         onSubmit,
                                                         isOwner,
                                                         setEditModeHandler,
                                                         disableViewMode
                                                     }): ReturnComponentType => {
    return (
        <>
            <div className={style.view__btn} onClick={disableViewMode}>
                <button type="button">Hide contacts</button>
            </div>
            {
                editMode
                    ? (
                        <>
                            <ProfileDataFormReduxForm
                                initialValues={profile}
                                profile={profile}
                                onSubmit={onSubmit}
                            />
                        </>
                    ) : (
                        <ProfileData
                            profile={profile}
                            isOwner={isOwner}
                            goToEditMode={setEditModeHandler}
                        />
                    )
            }
        </>
    )
}

export type ProfileEditPropsType = {
    editMode: boolean
    profile: ProfileType
    onSubmit: any
    isOwner: boolean
    setEditModeHandler: () => void
    disableViewMode: () => void
}
