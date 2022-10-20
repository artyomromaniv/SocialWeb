import React from 'react';
import './Header.module.css';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://dynamic.brandcrowd.com/asset/logo/87688c8c-3f72-40bd-afa5-08a27e865a33/logo-search-grid-1x?v=637571883505300000'></img>
        </header>
    )
}

export default Header;