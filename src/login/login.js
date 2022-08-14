import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/Validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={'email'}
                       validate={[required, maxLength20]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={'password'}
                       type={"password"}
                       validate={[required, maxLength20]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required, maxLength20]}
                       name={'remember me'}
                       type={"checkbox"} /> remember me
            </div>
            {/*{{props.error} &&*/}
                <div className={style.formSummaryError}>
                {props.error}
            </div>
            {/*/!*}*!/ Для варианта Димыча связь с auth-reducer*/}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
if (props.isAuth) {
    return <Redirect to={"/profile"} />
}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {Login}) (Login);