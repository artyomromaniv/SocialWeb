import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionsTypes, TReduxStore} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export type AppPropsType = {
    store: TReduxStore
    dispatch:(action:ActionsTypes)=>void
   }

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        //<BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path='/dialogs/*' render={() => <DialogsContainer store={props.store}/>}/>
                        <Route path='/profile:userId?' render={() => <ProfileContainer store={props.store}
                                                            />}/>
                        <Route path ='/users' render={() => <UsersContainer unfollow={props.store.dispatch} />}/>
                    </Switch>
                </div>
            </div>
        //</BrowserRouter>
    );
}

export default App;
