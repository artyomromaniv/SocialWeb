const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_POST = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    // changeNewPostText: (newText: string) => void
    // addPost: (postText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string

}
export type MessagesType = {
    id: number
    message: string

}
export type ProfilePageType = {
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

export type ActionsTypes = ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


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
                {id: 6, name: 'Olga'},
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
        this._callSubscriber = observer         //observer - наблюдатель
    },

    dispatch(action: ActionsTypes) {

        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: Math.random()*1000000000000 + Number(new Date()),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            console.log(newPost.id)
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_POST) {
            this._state.dialogsPage.newMessageBody = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const onPostChangeAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
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

export default store;
// window.store = store;
//store - ООП
//сам стейт
// let state: RootStateType = {
//     profilePage: {
//         newPostText: '',
//         posts: [
//             {id: 1, message: 'Hi,How is your day?', likesCount: 12},
//             {id: 2, message: 'How are you?', likesCount: 8},
//             {id: 3, message: 'HEy?', likesCount: 25},
//             {id: 4, message: 'yo yo Yo?', likesCount: 10},
//             {id: 5, message: 'Blabala', likesCount: 143},
//         ],
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Artyom'},
//             {id: 2, name: 'Nadya'},
//             {id: 3, name: 'Roman'},
//             {id: 4, name: 'Elena'},
//             {id: 5, name: 'Pavel'},
//             {id: 6, name: 'Olga'},
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your day?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Hello'},
//         ],
//     },
//     sideBar: {}
// }
