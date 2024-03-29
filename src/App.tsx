import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {ActionsTypes, TReduxStore} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


export type AppPropsType = {
    store: TReduxStore
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Switch>
                    <Route path='/dialogs/'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
