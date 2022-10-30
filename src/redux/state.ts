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
    id:  number
    message: string
    likesCount: number
}
export type DialogsType = {
    id:  number
    name: string
}
export type MessagesType = {
    id:  number
    message: string
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}
export type DialogsPage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody : string
}
export type SideBarType = {}
//общая типизация всех типов данных в стейте
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sideBar: SideBarType
}

export type ActionsTypes = ReturnType<typeof onPostChangeAC> | ReturnType<typeof addPostAC>

export const addPostAC = (newPostText:string) => {
    return {
        type: "ADD-POST",
        newPostText:newPostText
    }as const
}

export const onPostChangeAC = (newText:string) => {
    return{
        type: "CHANGE-NEW-POST-TEXT",
        newText:newText
    } as const
}


let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi,How is your day?', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 8},
                {id: 3, message: 'HEy?', likesCount: 25},
                {id: 4, message: 'yo yo Yo?', likesCount: 10},
                {id: 5, message: 'Blabala', likesCount: 143},
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

    // addPost(postText: string) {
    //     const newPost: PostsType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // changeNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    dispatch(action: ActionsTypes) {

        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 3, //Math.random().toString(16).slice(2) создаёт уникальный id
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "CHANGE-NEW-POST-TEXT") {
            console.log("change new post text", action.newText)
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

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

export default store;
// window.store = store;
//store - ООП