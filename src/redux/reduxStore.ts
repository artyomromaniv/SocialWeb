import {combineReducers, createStore} from "redux";
import {addPostAC, onPostChangeAC, profileReducer} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow, usersReducer}
    from "./usersReducer";

export type ActionsTypes = ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


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


export default store
