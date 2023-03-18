import React, {ReactNode} from 'react';
import './Profile.module.css';
import {RootStateType} from "../../redux/store";
import {ActionsTypes, AppStateType, setUserProfileAT} from "../../redux/reduxStore";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";

import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

type PathParamType = {
    userId: string
}

type mapStateToPropsType = {
    profile: any               /// any?
}
type mapDispatchToPropsType = {
    setUserProfileAC: (profile: any) => setUserProfileAT /// any?
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then(response => {
                    this.props.setUserProfileAC(response.data)
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


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);