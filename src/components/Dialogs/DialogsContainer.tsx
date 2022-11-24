import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store"
import store, {TReduxStore} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsType = {
    store: TReduxStore
}
const DialogsContainer = (props: DialogsType) => {


    return (
        <StoreContext.Consumer>
            { () => {
                let state = store.getState().dialogsPage

                const sendMessageClickHandler = () => {
                    props.store.dispatch(sendMessageAC())
                }
                const changeNewMessageHandler = (newText: string) => {
                    props.store.dispatch(updateNewMessageBodyAC(newText))
                }
           return <Dialogs store={props.store}
                     updateNewMessageBody={changeNewMessageHandler}
                     sendMessage={sendMessageClickHandler}
                     dialogsPage={state}
            /> }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;