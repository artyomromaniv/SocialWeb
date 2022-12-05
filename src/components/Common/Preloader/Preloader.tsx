import React from 'react';
import preloader from "../../../assets/images/Circle-Loading.svg";

export const Preloader = (props:any) => {
    return (
        <div>
            <img alt={'preloader'} src={preloader}/>
        </div>
    );
};

