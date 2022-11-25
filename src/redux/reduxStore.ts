import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

//export type TRootState = typeof rootReducer //стейт
export type TReduxStore = typeof store //стор

export type AppStateType = ReturnType<typeof rootReducer>//стейт


const store = createStore(rootReducer)

//window.store = store



export default store
