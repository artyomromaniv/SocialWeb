import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {ActionsTypes, addPostAC, onPostChangeAC} from "../../../redux/state";

type MyPostsPropsType = {
    id:  number
    message: string
    likesCount: number
}
type MyPostsType = {
    newPostText: string
    posts : Array<MyPostsPropsType>
    dispatch:(action:ActionsTypes)=>void
}

const MyPosts = (props:MyPostsType) => {
    let postsElements = props.posts.map(p =>  (<Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>))

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        // props.addPost(props.newPostText)
     /*   props.dispatch({type : "ADD-POST", newPostText: props.newPostText})*/
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch(onPostChangeAC(e.currentTarget.value))
        // props.changeNewPost(e.currentTarget.value)
        // props.dispatch({type: "CHANGE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;