import {ActionsTypes, PostsType, ProfilePageType, } from "./store";

export const ADD_POST = "ADD-POST"
export const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

let initialState = {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi,How is your day?', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 8},
            {id: 3, message: 'HEy?', likesCount: 25},
            {id: 4, message: 'yo yo Yo?', likesCount: 10},
            {id: 5, message: 'what a good day)', likesCount: 143},
        ],
    }

export const profileReducer = (state:ProfilePageType = initialState,action:ActionsTypes)=>{

    switch(action.type) {
        case ADD_POST :
            const newPost: PostsType = {
            id: Math.random()*1000000000000 + Number(new Date()),
            message: state.newPostText,
            likesCount: 0
        }
            console.log(newPost.id)
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const onPostChangeAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}

