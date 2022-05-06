import React from 'react';
import style from "../ProfileInfo.module.scss";

import {ProfileEditPropsType} from "./types";
import {ProfileData} from "./ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {ReturnComponentType} from "../../../../../api/api";

const ProfileEdit: React.FC<ProfileEditPropsType> = ({
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

export default ProfileEdit
