import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

const store = createStore(rootReducer)

export type TRootState = typeof rootReducer //стейт
export type TReduxStore = typeof store //стор

export type AppStateType = ReturnType<typeof rootReducer>



export default store
