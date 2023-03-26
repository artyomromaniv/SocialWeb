import React, {ReactNode} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    follow,
    getUsersTC,
    onPageChanged,
    setCurrentPage,
    toggleIsFollowingProgress, unfollow,
    UsersType
} from '../../redux/usersReducer';

import {UsersF} from './UsersF';
import {Preloader} from "../Common/Preloader/Preloader";


class UsersClassApiComponent extends React.Component<MainUsersContainerType, UsersType> {

    constructor(props: MainUsersContainerType) {
        super(props);
    }

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);

    }

    render(): ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersF
                key={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                getUsersTC={this.props.getUsersTC}
            />
        </>
    }
}

export type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (p: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
export type MainUsersContainerType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage, onPageChanged,
    toggleIsFollowingProgress, getUsersTC
})(UsersClassApiComponent);

export default UsersContainer;
