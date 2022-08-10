import {profileAPI, usersAPI} from "../api/apiUsers";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState =  {
    posts: [
        {id: 1, message: 'Idiot', likesCount: 1546},
        {id: 2, message: 'I am not agree', likesCount: 953},
        {id: 3, message: 'You are both stupid morons', likesCount: 2784},
    ],
    newPostText: '',
    profile: null,
    status: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            // state.posts.push(newPost); mutation
            // state.newPostText = '';
            return {...state, posts: [...state.posts, newPost], newPostText: '' };
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText; мутация - STOP
            return {...state, newPostText: action.newText};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_USER_PROFILE:
            // state.newPostText = action.newText; мутация - STOP
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

//Теперь пошли санки
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
    export const getStatus = (userId) => (dispatch) =>
    { profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data))
    });
}
export const updateStatus = (status) => (dispatch) =>
{ profileAPI.updateStatus(status).then(response => {
    //if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    //}
});
}
export default profileReducer;