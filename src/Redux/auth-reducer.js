import {authService} from "../api/authService";
import {authAPI, securityAPI} from "../api/apiUsers";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'http://localhost:3001/captchaUrl/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, //if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
                //users: state.users.map(users => users.id === action.userId ? {...users, followed: true} : users)
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authService.auth('Gutor')
    //Правильно указать  authAPI.me(),но тогда нет доступа к двум разделам на сайте

    if (response.data.resultCode === 0) {
        let {userId, email, login} = response.data.data;
        dispatch(setAuthUserData(userId, email, login, true));
    }
}

// export const login = (email, password, rememberMe) => {
//     authAPI.login(email, password, rememberMe)
//     if (response.data.resultCode === 0) {
//         dispatch(getAuthUserData())
//     } else {
// dispatch(stopSubmit('login', {_error: 'Common error'}));
//     }
// }
//     Это вариант Димыча. Не стал так делать, так как всё равно нет доступа к его апи
export const login = (email, password, rememberMe, captcha) =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            //success, get auth data
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl)
            }
            // eslint-disable-next-line no-undef
           const message = response.data.message.length > 0 ? response.data.message[0] : "Some error";
               dispatch(stopSubmit('login', {error: message}));
        }
    }

export const getCaptchaUrl = () => async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));

    }


export const logOut = () => async (dispatch) => {
    const response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer