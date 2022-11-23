import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

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

const MyPostsContainer = (props: MyPostsType) => {

    return (
        <StoreContext.Consumer>
            { (value) =>{
            const addPost = () => {
            props.dispatch(addPostAC(props.newPostText))
        }
            const onPostChange = (text: string) => {
            let action = onPostChangeAC(text)
            props.dispatch(action)
        }

            return <MyPosts
                newPostText={props.newPostText}
                posts={props.posts}
                addPost={addPost}
                onPostChange={onPostChange}
            /> }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;