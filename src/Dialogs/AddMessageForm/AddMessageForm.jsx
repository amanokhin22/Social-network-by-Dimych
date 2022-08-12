import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50)
export const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}/>

        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)