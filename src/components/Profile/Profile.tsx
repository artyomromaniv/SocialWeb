import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { RootStateType} from "../../redux/store";
import SuperMyPostContainer from "./MyPosts/MyPostsContainer";
import {ActionsTypes} from "../../redux/reduxStore";

type ProfilePropsType = {
    state: RootStateType
    profile:(action:ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostContainer/>
        </div>
    )
}

export default Profile;