import React, {ChangeEvent, useState} from 'react';
import style from "./ProfileInfo.module.scss"

import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";



import {ProfileType} from "../../../../redux/profileReducer/types";

import {ReturnComponentType} from "../../../../api/api";
import {Preloader} from "../../../../common/Preloader/Preloader";
import {ProfileEdit} from "./ProfileEdit/ProfileEdit";

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profile,
                                                         status,
                                                         updateUserStatus,
                                                         savePhoto,
                                                         isOwner,
                                                         saveProfile
                                                     }): ReturnComponentType => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [viewMode, setViewMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData: ProfileType): Promise<any> => {
        await saveProfile(formData)
        setEditMode(false)
    }

    const setEditModeHandler = (): void => {
        setEditMode(true)
    }

    const disableViewModeHandler = (): void => {
        setViewMode(false)
    }

    return (
        <div className={style.profile}>
            <div className={style.avatarBlock}>
                <div className={style.avatar}>
                    <img
                        className={style.mainPhoto}
                        alt='main avatar'
                        src={
                            profile
                            && (profile.photos.large !== null)
                                ? profile.photos.large
                                : avatarDefault
                        }
                    />
                </div>
                <div className={style.profile__inner}>
                    <ProfileStatus
                        isOwner={isOwner}
                        status={status}
                        updateUserStatus={updateUserStatus}
                    />
                    <div className={style.addedPhoto__btn}>
                        {
                            isOwner
                            && <div className={style.avatarEdit}>
                                <input
                                    type={"file"}
                                    onChange={(e) => onMainPhotoSelected(e)}
                                    id="imageUpload"
                                    accept=".png, .jpg, .jpeg"
                                />
                                <label htmlFor="imageUpload"> </label>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <hr/>
            {
                !viewMode
                    ? (
                        <div className={style.view__btn} onClick={() => setViewMode(true)}>
                            <button type="button">View contacts</button>
                        </div>

                    ) : (
                        <ProfileEdit
                            editMode={editMode}
                            profile={profile}
                            onSubmit={onSubmit}
                            isOwner={isOwner}
                            setEditModeHandler={setEditModeHandler}
                            disableViewMode={disableViewModeHandler}
                        />
                    )
            }
            <hr/>
        </div>
    )
}

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}