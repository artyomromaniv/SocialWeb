import React from 'react';
import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129__480.jpg'>
                </img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;