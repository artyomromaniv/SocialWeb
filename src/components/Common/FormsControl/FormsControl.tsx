import React, {FC} from 'react';
import s from './FormsControl.module.css'


interface FormsControlPropsType {
   input: string
   label: string
   type: string
   meta: {
      touched: boolean
      error: string
      warning: string
   }
}

const Element = (Elements: FC | string): FC<FormsControlPropsType> => ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
         <Elements
            {...input}
            {...props}
         />
         <div>
            {hasError && <span style={{color: 'orange', fontSize: '16px'}}> {meta.error} </span>}
         </div>
      </div>
   );
};

export const Textarea = Element('textarea');
export const Input = Element('input');

