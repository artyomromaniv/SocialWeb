import React from 'react';
import './Post.module.css';
import s from "./Post.module.css";

type PostPropsType = {
    message : string
    id: number
    likesCount: number
}
const Post = (props : PostPropsType) => {

    return (
        <div>
            <div className={s.item}>
                <img src='https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg'></img>
                {props.message}
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;