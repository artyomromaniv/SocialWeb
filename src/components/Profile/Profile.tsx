import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { RootStateType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SuperMyPostContainer from "./MyPosts/MyPostsContainer";
import {ActionsTypes} from "../../redux/reduxStore";

type ProfilePropsType = {
    state: RootStateType
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostContainer
                // posts={props.state.profilePage.posts}
                // newPostText={props.state.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile;