import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store"
import store, {TReduxStore} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";

// type MessagePropsType = {
//     id: number
//     message: string
// }

type DialogsType = {
    store: TReduxStore
}
// const Message = (props: MessagePropsType) => {
//     return (
//         <div className={s.message}>{props.message}</div>
//     )
// }

const DialogsContainer = (props:DialogsType) => {

    const state = store.getState().dialogsPage
    // const dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    // const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)
    // const newMessageBody = state.newMessageBody

    const sendMessageClickHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const changeNewMessageHandler = (newText:string) => {
        props.store.dispatch(updateNewMessageBodyAC(newText))
    }

    return (
        <Dialogs store={props.store}
                 updateNewMessageBody={changeNewMessageHandler}
                 sendMessage={sendMessageClickHandler}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;