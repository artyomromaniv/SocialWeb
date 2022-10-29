import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {ActionsTypes, RootStateType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
    dispatch:(action:ActionsTypes)=>void
    state: RootStateType
   }
type AppPropsType = {
    state: RootStateType
    addPost: (postText: string)=>void
    changeNewPostText:(newText :string)=>void
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.store._state.dialogsPage}/>}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                                 //state={props.store._state.profilePage}
                                                                 dispatch={props.dispatch}
                                                                 // addPost={props.addPost}
                                                                 // changeNewPost={props.changeNewPostText}
                        />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
