import React, {ReactNode} from 'react';
import './Profile.module.css';
import { RootStateType} from "../../redux/store";
import {ActionsTypes, AppStateType, setUserProfileAT} from "../../redux/reduxStore";
import Profile from "./Profile";
import {AppPropsType} from "../../App";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";
import profile from "./Profile";

type ProfilePropsType = {
    state: RootStateType
    dispatch:(action:ActionsTypes)=>void
}

class ProfileContainer extends React.Component<MainProfileContainerType, RootStateType> {
    constructor(props:MainProfileContainerType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
                console.log(response.data)
            })
    }

    render(): ReactNode {
        return (
            <div>
               <Profile state={this.state}
                        profile={this.props.profile}/>
            </div>
        )
    }
}

export type MainProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: any               /// any?
}
type mapDispatchToPropsType = {
    setUserProfileAC:(profile:any)=>setUserProfileAT /// any?
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps,{setUserProfileAC})(ProfileContainer);