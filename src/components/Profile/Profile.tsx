import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, RootStateType} from "../../redux/store";

type ProfilePropsType = {
    state: RootStateType
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile;