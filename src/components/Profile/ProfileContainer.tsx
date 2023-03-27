import React, {ReactNode} from 'react';
import './Profile.module.css';
import {RootStateType} from "../../redux/store";
import {AppStateType} from "../../redux/reduxStore";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamType = {
    userId: string
}

type mapStateToPropsType = {
    profile: any, /// any?
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
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
    profile: state.profilePage.profile,
})

//HOC
export let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));