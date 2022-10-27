import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (postText: string)=>void
    changeNewPost: (newText: string)=>void
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText} changeNewPost={props.changeNewPost}/>
        </div>

    )
}

export default Profile;