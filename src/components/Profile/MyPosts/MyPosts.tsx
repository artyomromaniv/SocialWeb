import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {MyPostsMainPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthTC, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControl";

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthTC(10)

const MyPosts = (props: MyPostsMainPropsType) => {

    let postsElements = props.posts.map(p => (
        <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>))

    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    component={Textarea}
                    validate={[required,maxLength10 ]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts;