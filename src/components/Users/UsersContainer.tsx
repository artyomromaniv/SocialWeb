import React from 'react';
import { connect } from 'react-redux';
import {Users} from "./Users";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";


type MapStatePropsType = {
    users: Array<UsersType>
}
type mapDispatchToProps = {
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users: Array<UsersType>)=>void
}
export type MainUsersContainerType = MapStatePropsType & mapDispatchToProps

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer =  connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer ;
