import React from 'react';
import s from './ProfileInfo.modules.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../asets/images/img_1.png"

const ProfileInfo = (profile, status, updateStatus, isOwner, savePhoto) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            {/*<img alt=''*/}
            {/*     src='https://cdn.pixabay.com/photo/2016/01/13/06/00/banner-1137276_960_720.jpg'/>*/}
            <div className={s.descriptionBlock}>
                <img alt='' src={ userPhoto } className={s.avatar}/>
                {isOwner && <input type={"Choose file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo