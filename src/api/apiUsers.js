import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/d-users',
    headers: {
        "API-KEY": ""
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`http://localhost:3001/follow-post/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`http://localhost:3001/follow-post/${userId}`)
    },
    getProfile(userId) {
        console.log('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
    },
    getStatus(userId) {
        return instance.get(`https://jsonplaceholder.typicode.com/posts`)
    },
    updateStatus(status) {
        return instance.put(`https://jsonplaceholder.typicode.com/posts`, {status: status})
    }
}





