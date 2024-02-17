import axios from "axios";

export const instance = axios.create({
    baseURL: "https://writer-production.up.railway.app/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }
});

// export function login(data) {
//     let params = new URLSearchParams();

//     params.append("username", data.username);
//     params.append("password", data.password);

//     return instance
//         .post("token", params)
// }