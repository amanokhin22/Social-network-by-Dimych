import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.modules.css';
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {


    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField('Full name', 'name', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField('', 'My professional skills', [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            {/*//Если применять метод объект с ключом, а также мап и иже с ними, тогда не работает, так как нет сервака*/}

            {/*<b>Contacts</b>: {profile.contacts}*/}
            {/*// у димыча вот так*/}
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key,"contacts" + key,[], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;