import axios from "axios";
import {UsersType} from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5fc86d21-99aa-4d0e-b35e-35e202965d80"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            })
    },
    // follow(u:UsersType) {
    //     return instance.delete(`follow/${u.id}`)
    //         .then(response => {
    //             if (response.data.resultCode === 0) {
    //                 unfollow(u.id)
    //             }
    //         });
    // }
}

