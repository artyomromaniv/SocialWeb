import React from 'react';
import './Header.module.css';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {   //типизация, что сюда нужно?
   isAuth: boolean,
   login: any
   logout: any
}

const Header = (props: HeaderPropsType) => {
   return (
      <header className={s.header}>
         <img alt={'headerImg'}
              src='https://dynamic.brandcrowd.com/asset/logo/87688c8c-3f72-40bd-afa5-08a27e865a33/logo-search-grid-1x?v=637571883505300000'></img>
         <div className={s.loginBlock}>
            {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout}>log out</button></div>
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header;