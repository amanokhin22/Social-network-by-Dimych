import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/Validators/validators";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={'login'}
                       validate={[required, maxLength20]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={'password'}
                       validate={[required, maxLength20]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required, maxLength20]}
                       name={'remember me'}
                       type={"checkbox"} /> remember me
            </div>
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
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login