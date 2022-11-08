import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {ActionsTypes } from "../../../redux/store";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer"

type MyPostsPropsType = {
    id:  number
    message: string
    likesCount: number
}
type MyPostsType = {
    newPostText: string
    posts : Array<MyPostsPropsType>
    //dispatch:(action:ActionsTypes)=>void
    addPost:()=>void
    onPostChange:(text:string)=>void
}

const MyPosts = (props:MyPostsType) => {
    let postsElements = props.posts.map(p =>  (<Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>))

    const addPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
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