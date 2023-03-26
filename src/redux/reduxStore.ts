import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {addPostAC, onPostChangeAC, profileReducer, setUserProfileAC} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unFollow,
    usersReducer
}
    from "./usersReducer";
import {authReducer, setUserDataAT} from "./auth-reducer";
import thunk from "redux-thunk";

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
    | setUserProfileAT
    | setUserDataAT
    | ReturnType<typeof toggleIsFollowingProgress>

export type  setUserProfileAT = ReturnType<typeof setUserProfileAC>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})


export type TReduxStore = typeof store //стор
export type AppStateType = ReturnType<typeof rootReducer>//стейт


const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export default store;
