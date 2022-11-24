import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {MyPostsMainPropsType} from "./MyPostsContainer";


type MyPostsPropsType = {
    id:  number
    message: string
    likesCount: number
}
// type MyPostsType = {
//     newPostText: string
//     posts : Array<MyPostsPropsType>
//     //dispatch:(action:ActionsTypes)=>void
//     addPost:(newPostText:string)=>void
//     onPostChange:(text:string)=>void
//
// }

const MyPosts = (props:MyPostsMainPropsType) => {
    let postsElements = props.posts.map(p =>  (<Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>))
    const addPost = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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