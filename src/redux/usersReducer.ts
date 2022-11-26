import {ActionsTypes} from "./store";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
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
        {
            id: 1,
            followed: false,
            fullName: 'Artyom R',
            status: "junior developer",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Nadya Y',
            status: "model",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Roman R',
            status: "businessman",
            location: {city: "Lviv", country: "Ukraine"}
        },
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
        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId:number) => ({type: UNFOLLOW, userId} as const)

