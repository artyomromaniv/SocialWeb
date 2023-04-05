import React from "react";
import {connect} from "react-redux";
import {LoginReduxForm} from "./LoginForm";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";

export type FormDataType = {
   email: string,
   password: string,
   rememberMe: boolean
}
type MapStatePropsType = {
   isAuth: boolean
}

type MapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void,
   logout: () => void
}

type LoginPropsType = MapDispatchToPropsType | MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      isAuth: state.auth.isAuth
   }
}

const Login = (props: any) => {     ///?

   const onSubmit = (formData: FormDataType) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to={'/profile'}/>
   }

      return (
         <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
         </div>
      )
}

export default connect(mapStateToProps, {login, logout})(Login);
