import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import {DialogsPage} from "../../redux/store"
import  {TReduxStore} from "../../redux/reduxStore";
import {AddMessageFormRedux, AddMessageFormReduxDataType} from "./AddMessageForm/AddMessageForm";


type MessagePropsType = {
    id: number
    message: string
}
type DialogsType = {
    store: TReduxStore
    updateNewMessageBody:(newText:string)=>void
    sendMessage: (newMessageBody: string)=>void
    dialogsPage: DialogsPage
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props:DialogsType) => {

    const state = props.dialogsPage

    const dialogElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)
    //const newMessageBody = state.newMessageBody


    const onSubmit = (formData: AddMessageFormReduxDataType) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    )
}



export default Dialogs;