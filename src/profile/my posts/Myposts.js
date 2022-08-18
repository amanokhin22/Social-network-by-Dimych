import React from 'react';
import s from './Myposts.module.css'
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";

const MyPosts = React.memo (props => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={Textarea}
                   placeholder={"Post message"}
                   validate={[required, maxLength10]}/>
        </div>
        <button>Add post</button>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts