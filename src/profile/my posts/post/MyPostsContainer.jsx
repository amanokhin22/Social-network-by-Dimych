import {addPostActionCreator} from '../../../Redux/profile-reducer'
import MyPosts from "../Myposts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})
const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    },
})
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;