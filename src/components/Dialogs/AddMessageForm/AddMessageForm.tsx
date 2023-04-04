import {maxLengthTC, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControl/FormsContros";

export type AddMessageFormReduxDataType = {
   newMessageBody: string
}

const maxLength50 = maxLengthTC(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormReduxDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
            />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormReduxDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
