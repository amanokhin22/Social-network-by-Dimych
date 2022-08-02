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
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`/profile?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}