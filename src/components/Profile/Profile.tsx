import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts : Array<PostsType>
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Profile = (props:ProfilePropsType) => {
    // let posts = [
    //     {id: 1, message: 'Hi,How is your day?', likesCount: 12},
    //     {id: 2, message: 'How are you?', likesCount: 8},
    //     {id: 2, message: 'HEy?', likesCount: 25},
    //     {id: 2, message: 'yo yo Yo?', likesCount: 10},
    // ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
}

export default Profile;