import React, {ReactNode} from 'react';
import styles from './users.module.css';
import {MainUsersContainerType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "./../../assets/images/user.png";
import {UsersType} from "../../redux/usersReducer";



export class UsersC extends React.Component<MainUsersContainerType, UsersType> {

    constructor(props: MainUsersContainerType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render(): ReactNode {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages:Array<number> = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

            return (
                <div>
                    <div>
                        {pages.map(p => {
                           return <span className={this.props.currentPage === p ? styles.selectedPage: ''}>{p}</span>
                        })}
                    </div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}