import React from "react";
import './Dialogs.module.css'
import { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
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
    updateNewMessageBody: (newText: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessageBody: (newText: string) => {
            dispatch(updateNewMessageBodyAC(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)