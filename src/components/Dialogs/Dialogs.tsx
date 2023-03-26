import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import {DialogsPage} from "../../redux/store"
import  {TReduxStore} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";

type MessagePropsType = {
    id: number
    message: string
}
type DialogsType = {
    store: TReduxStore
    updateNewMessageBody:(newText:string)=>void
    sendMessage:()=>void
    dialogsPage: DialogsPage
    isAuth: boolean
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
    const newMessageBody = state.newMessageBody

    const sendMessageClickHandler = () => {
        props.sendMessage()
    }

    const changeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let newText =  e.currentTarget.value
        props.updateNewMessageBody(newText)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={changeNewMessageHandler}
                                   placeholder='Enter your message'>
                    </textarea></div>
                    <div><button onClick={sendMessageClickHandler}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;