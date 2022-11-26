import {combineReducers, createStore} from "redux";
import {addPostAC, onPostChangeAC, profileReducer} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {followAC, setUsersAC, unFollowAC, usersReducer} from "./usersReducer";

export type ActionsTypes = ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
})

//export type TRootState = typeof rootReducer //стейт
export type TReduxStore = typeof store //стор

export type AppStateType = ReturnType<typeof rootReducer>//стейт


const store = createStore(rootReducer)

//window.store = store



export default store
