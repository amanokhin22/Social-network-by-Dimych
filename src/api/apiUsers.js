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
    async getUsers(currentPage = 1, pageSize = 5) {
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

export const myProfileAPI = {
   async setMyProfile() {
        return await instance.get('my-profile')
    }
}

export const profileAPI = {
    getProfile() {
        return placeholder.get(`users`)
    },
    getStatus() {
        return placeholder.get(`posts`)
    },
    updateStatus(status) {
        return placeholder.put(`posts`, {status: status});
    },
    savePhoto(photoFile) {
        // eslint-disable-next-line no-use-before-define
        const formData = new formData();
        formData.append("image", photoFile);
        return placeholder.get(`photos`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return placeholder.put(`posts`, profile)
    }
}

export const authAPI = {
    me() {
        return dummy.get(`auth`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return dummy.post(
            `auth/login`,
            {email, password, rememberMe, captcha}
        );
    },
    logOut() {
        return dummy.delete(`auth/login`);
    },
}

export const securityAPI = {
    getCapthaUrl() {
        return instance.get(`captchaUrl`)
    }
}





