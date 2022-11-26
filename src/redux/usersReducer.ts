import {ActionsTypes} from "./reduxStore";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
// export type ProfilePageType = {
//     newPostText: string
//     users: Array<UsersType>
// }

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://sun1-14.userapi.com/s/v1/ig2/IcUxKDTv37qWfR_KWVC0zpxMSiSlGk_rnTFm_BoHu08SumykXKj_fkI5HYV_CTJqhbBD7oHlZV-74UyrizSH8gg9.jpg?size=400x400&quality=95&crop=367,57,820,820&ava=1",
        //     followed: false,
        //     fullName: 'Artyom R',
        //     status: "junior developer",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://sun9-28.userapi.com/impf/c628625/v628625600/bf1/ENeUbAlH_4Q.jpg?size=402x604&quality=96&sign=076fea63e64b265ac5f0e7a7f36779b9&type=album",
        //     followed: true,
        //     fullName: 'Nadya Y',
        //     status: "model",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://obovsyom.com/wp-content/uploads/2021/01/e8k798.jpg",
        //     followed: false,
        //     fullName: 'Roman R',
        //     status: "businessman",
        //     location: {city: "Lviv", country: "Ukraine"}
        // },
    ] as Array<UsersType>,
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS  :
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId:number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)

