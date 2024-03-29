import React, {ReactNode} from 'react';
import './Profile.module.css';
import {RootStateType} from "../../redux/store";
import {AppStateType} from "../../redux/reduxStore";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type mapStateToPropsType = {
    profile: any, /// any?
    status: string

}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void
    updateStatus:(status: string )=> void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamType> & OwnPropsType


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
        this.props.getStatus(userId)
    }

    render(): ReactNode {

        return (
            <div>
                <Profile state={this.state}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)