import React from "react";
import './Dialogs.module.css'
import { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {DialogsPage} from "../../redux/store"
import  {AppStateType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type MapStatePropsType = {
    dialogsPage: DialogsPage
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateNewMessageBody: (newText: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage,
        isAuth : state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;