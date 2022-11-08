import {ActionsTypes, DialogsPage, } from "./store";

export const UPDATE_NEW_MESSAGE_POST = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
        dialogs: [
            {id: 1, name: 'Artyom'},
            {id: 2, name: 'Nadya'},
            {id: 3, name: 'Roman'},
            {id: 4, name: 'Elena'},
            {id: 5, name: 'Pavel'},
            {id: 6, name: 'Kostya'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your day?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Hello'},
        ],
        newMessageBody: '',
    }

export const dialogsReducer = (state: DialogsPage = initialState, action: ActionsTypes) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_POST:
            state.newMessageBody = action.newText
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: Math.random() * 1000000000000 + Number(new Date()), message: body})
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}
export const updateNewMessageBodyAC = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_POST,
        newText,
    } as const
}

