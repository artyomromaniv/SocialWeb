import React from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

type PostsType = {
    posts : Array<MyPostsPropsType>
}

type MyPostsPropsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props:PostsType) => {
    // let posts = [
    //     {id: 1, message: 'Hi,How is your day?', likesCount: 12},
    //     {id: 2, message: 'How are you?', likesCount: 8},
    //     {id: 2, message: 'HEy?', likesCount: 25},
    //     {id: 2, message: 'yo yo Yo?', likesCount: 10},
    // ]

    let postsElements = props.posts.map(p => (<Post message={p.message} id={p.id} likesCount={p.likesCount}/>))

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;