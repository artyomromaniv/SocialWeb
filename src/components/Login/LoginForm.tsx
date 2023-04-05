import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTC, required} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControl/FormsControl";
import {FormDataType} from "./Login";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   const maxLength10 = maxLengthTC(10)

   return (
      <div>

         <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                  placeholder={'Email'}
                  name={'email'}
                  validate={[required, maxLength10]}
                  component={Input}
               />
            </div>
            <div>
               <Field
                  placeholder={'Password'}
                  name={'password'}
                  type={'password'}
                  validate={[required, maxLength10]}
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