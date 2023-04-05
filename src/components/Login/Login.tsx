import React from "react";
import { reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {LoginReduxForm} from "./LoginForm";

export type FormDataType = {
   email: string,
   password: string,
   rememberMe: boolean
}

type mapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void,
   logout: () => void
}

type LoginPropsType = mapDispatchToPropsType


const Login = (props: LoginPropsType) => {
   const onSubmit = (formData: FormDataType) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

export default connect(null, {login, logout})(Login);
