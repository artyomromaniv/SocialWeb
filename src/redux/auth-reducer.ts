import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = "SET-USER-DATA";

export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>


export type InitialStateType = {
   id: null | number,
   email: null | string,
   login: null | string,
   isAuth: boolean
}

export const authReducer = (state: InitialStateType, action: ActionsTypes): InitialStateType => {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
            isAuth: true
         }
      default:
         return state
   }
}
//AC
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({   //?
   type: SET_USER_DATA,
   payload: {userId, email, login, isAuth}
} as const)

//Thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
   authAPI.me()
      .then(response => {
         if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login, true))
         }
      });
}

export const login = (email: any, password: any, rememberMe: boolean) => (dispatch: any) => {  //?
   authAPI.login(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         }
      });
}
export const logout = () => (dispatch: Dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
         }
      });
}

