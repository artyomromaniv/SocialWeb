import React from "react";
import s from './Dialogs.module.css';
import './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";

type MessagePropsType = {
    id: number
    message: string
}
type DialogsPropsType = {
    id: number
    name:string
}

type DialogsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props:DialogsType) => {

    // let dialogs = [
    //     {id: 1, name: 'Artyom'},
    //     {id: 2, name: 'Nadya'},
    //     {id: 3, name: 'Roman'},
    //     {id: 4, name: 'Elena'},
    //     {id: 5, name: 'Pavel'},
    //     {id: 6, name: 'Olga'},
    // ]
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How is your day?'},
    //     {id: 3, message: 'Yo'},
    //     {id: 4, message: 'Yo'},
    //     {id: 5, message: 'Hello'},
    // ]
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;