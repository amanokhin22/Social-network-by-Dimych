import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./my posts/post/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            {props.hideProfile ? "" :
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile