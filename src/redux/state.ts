let renderTree = () => {
    console.log('state changed')
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
}
export type SideBarType = {}
//общая типизация всех типов данных в стейте
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sideBar: SideBarType
}
//сам стейт
let state: RootStateType = {
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
    },
    sideBar: {}
}
export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree()
}

export const changeNewPostText = (NewText: string) => {
    state.profilePage.newPostText = NewText
    renderTree()
}

export const subscribe = (observer: () => void) => {
    renderTree = observer         //observer - наблюдатель
}

export default state;