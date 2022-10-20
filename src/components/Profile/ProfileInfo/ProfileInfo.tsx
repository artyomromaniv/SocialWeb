import React from 'react';
import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://p4.wallpaperbetter.com/wallpaper/471/767/754/abstract-ae-plexus-cyan-dots-wallpaper-preview.jpg'>
                </img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;