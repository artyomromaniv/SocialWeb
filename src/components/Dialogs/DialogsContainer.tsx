import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {DialogsPage, StoreType} from "../../redux/store"
import store, {AppStateType, TReduxStore} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
//import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type DialogsType = {
    store: TReduxStore
}
// const DialogsContainer = (props: DialogsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(value) => {
//                 let state = store.getState().dialogsPage
//
//                 const sendMessageClickHandler = () => {
//                     props.store.dispatch(sendMessageAC())
//                 }
//                 const changeNewMessageHandler = (newText: string) => {
//                     props.store.dispatch(updateNewMessageBodyAC(newText))
//                 }
//                 return <Dialogs store={props.store}
//                                 updateNewMessageBody={changeNewMessageHandler}
//                                 sendMessage={sendMessageClickHandler}
//                                 dialogsPage={state}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }



type MapStatePropsType = {
    dialogsPage: DialogsPage
}
type MapDispatchPropsType = {
    updateNewMessageBody: (newText: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage
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

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;