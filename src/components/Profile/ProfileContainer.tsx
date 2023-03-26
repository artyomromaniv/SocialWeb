import React, {ReactNode} from 'react';
import './Profile.module.css';
import {RootStateType} from "../../redux/store";
import {ActionsTypes, AppStateType, setUserProfileAT} from "../../redux/reduxStore";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfileAC} from "../../redux/profileReducer";

import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type ProfilePropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

type PathParamType = {
    userId: string
}

type mapStateToPropsType = {
    profile: any, /// any?
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile:(userId:string)=>void
}
export type ownPropsType = mapStateToPropsType & mapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamType> & ownPropsType


class ProfileContainer extends React.Component<PropsType, RootStateType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(2);
        }
        this.props.getUserProfile(userId)
    }

    render(): ReactNode {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile state={this.state}
                         profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth : state.auth.isAuth
})

export let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);