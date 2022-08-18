import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/',
    headers: {
        "API-KEY": ""
    }
});

const placeholder = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "API-KEY": ""
    }
});

const dummy = axios.create({
    withCredentials: true,
    baseURL: 'https://dummyjson.com/',
    headers: {
        "API-KEY": ""
    }
});

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`d-users?page=${currentPage}&count=${pageSize}`)
        return response.data;
    },
    follow(userId) {
        return instance.post(`follow-post/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow-post/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return placeholder.get(`users`)
    },
    getStatus(userId) {
        return placeholder.get(`posts`)
    },
    updateStatus(status) {
        return placeholder.put(`posts`, {status: status})
    }
}

export const authAPI = {
    me() {
        return dummy.get(`auth`)
    },
    login(email, password, rememberMe = false) {
        return dummy.post(
            `auth/login`,
            {email, password, rememberMe}
        );
    },
    logOut() {
        return dummy.delete(`auth/login`);
    },
}





