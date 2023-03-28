import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = "ADD-POST"
export const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"
export const SET_USER_PROFILE = "SET-USER-PROFILE"
export const SET_STATUS = "SET-STATUS"

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi,How is your day?', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 8},
        {id: 3, message: 'HEy?', likesCount: 25},
        {id: 4, message: 'yo yo Yo?', likesCount: 10},
        {id: 5, message: 'what a good day)', likesCount: 143},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST : {
            const newPost: PostsType = {
                id: Math.random() * 1000000000000 + Number(new Date()),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case CHANGE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state,status: action.status}
        }
        default:
            return state
    }
}

//AC
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const onPostChangeAC = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText} as const)
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)


//Thunk
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(status)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatusAC(response.data))
            }
        })
}



