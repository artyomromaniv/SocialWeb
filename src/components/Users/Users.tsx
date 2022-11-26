import React from 'react';
import styles from './users.module.css';
import {MainUsersContainerType} from "./UsersContainer";

export const Users = (props:MainUsersContainerType) => {

//side effect:(
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://sun1-14.userapi.com/s/v1/ig2/IcUxKDTv37qWfR_KWVC0zpxMSiSlGk_rnTFm_BoHu08SumykXKj_fkI5HYV_CTJqhbBD7oHlZV-74UyrizSH8gg9.jpg?size=400x400&quality=95&crop=367,57,820,820&ava=1",
                followed: false,
                fullName: 'Artyom R',
                status: "junior developer",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://sun9-28.userapi.com/impf/c628625/v628625600/bf1/ENeUbAlH_4Q.jpg?size=402x604&quality=96&sign=076fea63e64b265ac5f0e7a7f36779b9&type=album",
                followed: true,
                fullName: 'Nadya Y',
                status: "model",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: "https://obovsyom.com/wp-content/uploads/2021/01/e8k798.jpg",
                followed: false,
                fullName: 'Roman R',
                status: "businessman",
                location: {city: "Lviv", country: "Ukraine"}
            },
        ])
    }



    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} }>unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};
