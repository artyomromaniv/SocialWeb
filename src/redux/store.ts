import {addPostAC, onPostChangeAC, profileReducer} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {follow, unFollow} from "./usersReducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
 type DialogsType = {
    id: number
    name: string
}
 type MessagesType = {
    id: number
    message: string

}
 type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}
export type DialogsPage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SideBarType = {}
//общая типизация всех типов данных в стейте
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sideBar: SideBarType
}

type ActionsTypes = ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>


let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi,How is your day?', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 8},
                {id: 3, message: 'HEy?', likesCount: 25},
                {id: 4, message: 'yo yo Yo?', likesCount: 10},
                {id: 5, message: 'what a good day)', likesCount: 143},
            ],
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer     //observer - наблюдатель
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        //уведомляем подписчика
        this._callSubscriber(this._state)
    }
}


export default store;

