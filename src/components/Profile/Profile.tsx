import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: {
        posts : Array<PostsType>
    }
    addPost: (postText: string)=>void
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
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>

    )
}

export default Profile;