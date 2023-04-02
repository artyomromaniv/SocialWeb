import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {addPostAC,  profileReducer, setStatusAC, setUserProfileAC} from "./profileReducer";
import {dialogsReducer, sendMessageAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollowSuccess,
    usersReducer
}
    from "./usersReducer";
import {authReducer, setUserDataAT} from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer} from 'redux-form';

export type ActionsTypes =
     ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | setUserProfileAT
    | setUserDataAT
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof setStatusAC>

export type  setUserProfileAT = ReturnType<typeof setUserProfileAC>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


export type TReduxStore = typeof store //стор
export type AppStateType = ReturnType<typeof rootReducer>//стейт


const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export default store;
