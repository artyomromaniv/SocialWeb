import React from 'react';
import './MyPosts.module.css';
import {addPostAC} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../../redux/reduxStore";
import { Dispatch } from 'redux';

type MyPostsPropsType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsType = {
    newPostText: string
    posts: Array<MyPostsPropsType>
    dispatch: (action: ActionsTypes) => void
}

type MapStatePropsType = {

    posts:Array<MyPostsPropsType>
}
type MapDispatchPropsType = {
    addPost:(newPostText:string)=>void
}

export type MyPostsMainPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addPost:(newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}


const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostContainer;
