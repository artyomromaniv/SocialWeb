import React from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

type PostsType = {
    posts : Array<MyPostsPropsType>
    addPost: (postText: string)=>void
}

type MyPostsPropsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props:PostsType) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} id={p.id} likesCount={p.likesCount}/>))

    let newPostElement  = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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