import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePropsType = {
    state: ProfilePageType
    // addPost: (postText: string)=>void
    // changeNewPost: (newText: string)=>void
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                // addPost={props.addPost}
                // changeNewPost={props.changeNewPost}
                dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile;