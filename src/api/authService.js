import axios from "axios";


export const authService = {
    async auth(login) {
        if (login !== "Gutor") {
            return axios.get(`http://localhost:3001/auth-me-fail`, {
                withCredentials: true
            })
        }
        return axios.get(`http://localhost:3001/auth-me-ok`, {
            withCredentials: true
        })
    }
}