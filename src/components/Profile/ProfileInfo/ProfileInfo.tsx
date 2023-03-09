import React from 'react';
import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css';

import {Preloader} from "../../Common/Preloader/Preloader";


const ProfileInfo = (props:any) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt={'buildings'}
                    src='https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129__480.jpg'>
                </img>
            </div>
            <div className={s.descriptionBlock}>
                <img alt={'profile_photo'} src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;