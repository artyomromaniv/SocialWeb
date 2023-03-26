import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
//AC
export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data:{userId,email,login}} as const)

//Thunk
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id,email,login))
            }
        });
}

