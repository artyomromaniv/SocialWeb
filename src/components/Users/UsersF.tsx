import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {MainUsersContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";



export const UsersF = (props: MainUsersContainerType) => {


    // чтобы отображались не все страницы юзеров
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let fullPages = new Array(pagesCount).fill('').map((e, i) => i + 1)
    const pages = [...fullPages.slice(props.currentPage - 4 <= 0 ? 0 : props.currentPage - 4, props.currentPage),
        ...fullPages.slice(props.currentPage, props.currentPage + 3)]


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                 <img alt={"img"} src={u.photos.small != null ? u.photos.small : userPhoto}
                                      className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

