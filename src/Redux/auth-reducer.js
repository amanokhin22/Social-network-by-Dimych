import {authService} from "../api/authService";
import {authAPI} from "../api/apiUsers";

const SET_USER_DATA = 'SET_USER_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    authService.auth('Gutor')
        //Правильно указать authAPI.me(),но тогда нет доступа к двум разделам на сайте
        .then(response => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data;
                dispatch (setAuthUserData(userId, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch (getAuthUserData())
            }
        });
}

export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch (setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer