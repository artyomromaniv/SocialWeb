import {ActionsTypes} from "./reduxStore";

const SET_USER_DATA = "SET-USER-DATA";

export type setUserDataAT = ReturnType<typeof setUserDataAC>

let initialState = {
    id: null,
    email: '',
    login: '',
    //isFetching: false
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserDataAC = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data:{userId,email,login}} as const)


