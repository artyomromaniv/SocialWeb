import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {RootStateType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

type AppPropsType = {
    state: RootStateType
    addPost: (postText: string)=>void
    changeNewPostText:(NewText :string)=>void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 changeNewPost={props.changeNewPostText}
                        />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
