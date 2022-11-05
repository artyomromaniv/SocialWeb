import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store"

type MessagePropsType = {
    id: number
    message: string
}
type DialogsType = {
    state: StoreType
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props:DialogsType) => {
    const dialogElements = props.state._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.state._state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)
    const newMessageBody = props.state._state.dialogsPage.newMessageBody

    const sendMessageClickHandler = () => {
        props.state.dispatch(sendMessageAC())
    }
    const changeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let newText =  e.currentTarget.value
        props.state.dispatch(updateNewMessageBodyAC(newText))
    }

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