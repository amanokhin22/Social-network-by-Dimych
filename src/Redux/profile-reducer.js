import {profileAPI, usersAPI} from "../api/apiUsers";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
    posts: [
        {id: 1, message: 'Idiot', likesCount: 1546},
        {id: 2, message: 'I am not agree', likesCount: 953},
        {id: 3, message: 'You are both stupid morons', likesCount: 2784},
    ],
    profile: null,
    status: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            // state.posts.push(newPost); mutation
            // state.newPostText = '';
            return {...state, posts: [...state.posts, newPost], newPostText: ''};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_USER_PROFILE:
            // state.newPostText = action.newText; мутация - STOP
            return {...state, profile: action.profile};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};

            default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setStatus = (status) => ({
    type: SET_STATUS, status
});
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
});
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS, photos
})

//Теперь пошли санки
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //можно придумать как сделать.диспатч, например
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        // eslint-disable-next-line no-undef
       dispatch (stopSubmit('edit-profile', {error: response.data.message[0]}));
       return Promise.reject(response.data.message[0]);
    }
}

export default profileReducer;