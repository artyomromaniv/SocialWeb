import React, {ReactNode} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC, onPageChangedAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/usersReducer";

import axios from "axios";
import {UsersF} from "./UsersF";

 class UsersClassApiComponent extends React.Component<MainUsersContainerType, UsersType> {

    constructor(props: MainUsersContainerType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber:number ) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render(): ReactNode {

        return  <UsersF
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setUsers={this.props.setUsers}
        />
    }
}


export type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type mapDispatchToProps = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage:(pageNumber: number)=>void
    setTotalUsersCount:(totalCount: number)=>void
    onPageChanged:(p:number)=>void
}
export type MainUsersContainerType = MapStatePropsType & mapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        onPageChanged:(p:number) => {
            dispatch(onPageChangedAC(p))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassApiComponent);

export default UsersContainer;
