import React from 'react';
import s from './ProfileInfo.modules.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img alt=''
                 src='https://cdn.pixabay.com/photo/2016/01/13/06/00/banner-1137276_960_720.jpg'/>
            <div className={s.descriptionBlock}>
                {/*<img alt='' src={props.profile.photos.large}/>*/}
                {/*<img alt='' src={props.profile.photos.small}/>*/}
                {/*<div>{props.profile.fullName}</div>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo