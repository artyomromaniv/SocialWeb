import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Common/FormsControl/FormsControl.module.css";
import {maxLengthTC} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControl/FormsContros";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const maxLength10 = maxLengthTC(10)

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        placeholder={'Login'}
                        name={'login'}
                        validate={[require,maxLength10]}
                        component={Input}
                    />
                </div>
                <div>
                    <Field
                        placeholder={'Password'}
                        name={'password'}
                        validate={[require,maxLength10]}
                        component={Input}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        name={'rememberMe'}
                        type={"checkbox"}
                    /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
//
// export const Input = ({input, meta, ...props}) => {   ///???????
//
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }