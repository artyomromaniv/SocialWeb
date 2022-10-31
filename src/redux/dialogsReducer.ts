import {ActionsTypes, DialogsPage, PostsType, RootStateType, StoreType} from "./state";

const UPDATE_NEW_MESSAGE_POST = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: DialogsPage, action: ActionsTypes) => {

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

    // if (action.type === UPDATE_NEW_MESSAGE_POST) {
    //     state.newMessageBody = action.newText
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody
    //     state.newMessageBody = ""
    //     state.messages.push({id: Math.random() * 1000000000000 + Number(new Date()), message: body})
    // }
    // return state
}

export default dialogsReducer