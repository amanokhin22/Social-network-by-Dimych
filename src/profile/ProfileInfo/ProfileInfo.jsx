import React, {useState} from 'react';
import s from './ProfileInfo.modules.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../asets/images/img_1.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (profile, status, updateStatus, isOwner, savePhoto, saveProfile) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <div>
            {/*<img alt=''*/}
            {/*     src='https://cdn.pixabay.com/photo/2016/01/13/06/00/banner-1137276_960_720.jpg'/>*/}
            <div className={s.descriptionBlock}>
                <img alt='' src={userPhoto} className={s.avatar}/>
                {isOwner && <input type={"Choose file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMod={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileData profile={profile}/>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMod}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMod}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            {/*//Если применять метод объект с ключом, а также мап и иже с ними, тогда не работает, так как нет сервака*/}

            <b>Contacts</b>: {profile.contacts}
            {/*// у димыча вот так*/}
            {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})} */}
        </div>
    </div>
}


// const Contact = ({contactTitle, contactValue}) => {
//     return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
// } Если верхнюю часть от Димыча реализовать, тогда и это

export default ProfileInfo