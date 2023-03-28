import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { RootStateType} from "../../redux/store";
import SuperMyPostContainer from "./MyPosts/MyPostsContainer";
import {ActionsTypes} from "../../redux/reduxStore";

export type ProfilePropsType = {
    state: RootStateType
    profile:(action:ActionsTypes)=>void
    status:string
    updateStatus:string
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus= {props.updateStatus}/>
            <SuperMyPostContainer/>
        </div>
    )
}

export default Profile;