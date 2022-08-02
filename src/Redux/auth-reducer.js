const SET_USER_DATA = 'SET_USER_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer