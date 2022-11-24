import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, onPostChangeAC, ProfilePageType} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
//import {StoreContext} from '../../../StoreContext';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
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
// const MyPostsContainer = (props: MyPostsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(value) => {
//                 const addPost = () => {
//                     props.dispatch(addPostAC(props.newPostText))
//                 }
//                 const onPostChange = (text: string) => {
//                     props.dispatch(onPostChangeAC(text))
//                 }
//
//                 return <MyPosts
//                     newPostText={props.newPostText}
//                     posts={props.posts}
//                     addPost={addPost}
//                     onPostChange={onPostChange}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    newPostText:string,
    posts:Array<MyPostsPropsType>
}
type MapDispatchPropsType = {
    addPost:(newPostText:string)=>void
    onPostChange:(text:string)=>void
}

export type MyPostsMainPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText ,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addPost:(newPostText) => {
            dispatch(addPostAC(newPostText))
        } ,
        onPostChange:(text)=> {
            dispatch(onPostChangeAC(text))
        }
    }
}


const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostContainer;
