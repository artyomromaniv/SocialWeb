import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import s from './FormsControl.module.css'

type DefaultInputType<T> = DetailedHTMLProps<InputHTMLAttributes<T>, T>
type DefaultTextAreaType<T> = DetailedHTMLProps<TextareaHTMLAttributes<T>, T>

type  FormsControlPropsType<T> = T & {
   meta: {
      touched: boolean
      error: string
      warning: string
   }
}

function Element <T>(Element: string | React.FC): React.FC<FormsControlPropsType<T>> {
   return ({meta, ...props}) => {
      const hasError = meta.touched && meta.error;

      return (
         <div className={ s.formControl + " " + (hasError ? s.error : "")} >
            <Element
               {...props}
            />
            <div>
               {hasError && <span style={{color: 'orange', fontSize: '16px'}}> {meta.error} </span>}
            </div>
         </div>
      )
   }
}

export const Textarea = Element<DefaultInputType<HTMLTextAreaElement>>('textarea')
export const Input = Element<DefaultTextAreaType<HTMLInputElement>>('input')


