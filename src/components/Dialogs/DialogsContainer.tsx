import React from "react";
import './Dialogs.module.css'
import { sendMessageAC} from "../../redux/dialogsReducer";
import {DialogsPage} from "../../redux/store"
import  {AppStateType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: DialogsPage
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody:string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)