import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

type AppPropsType = {
    posts : Array<PostsType>
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

const App = (props:AppPropsType) => {
    /*let posts = [
        {id: 1, message: 'Hi,How is your day?', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 8},
        {id: 2, message: 'HEy?', likesCount: 25},
        {id: 2, message: 'yo yo Yo?', likesCount: 10},
    ]*/

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
