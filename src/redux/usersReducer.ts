import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const ON_PAGE_CHANGED = "ON_PAGE_CHANGED";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string,
    large: string
}

export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    //location: LocationType
}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE  :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT  :
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING  :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS  :
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const onPageChanged = (p: number) => ({type: ON_PAGE_CHANGED, p} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {

    dispatch(toggleIsFetching(true))


    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
}

