import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props:any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field component={'input'}  name={'rememberMe'}type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export const Login = () => {
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm/>
        </div>
    )
}