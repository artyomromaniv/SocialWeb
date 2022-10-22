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
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id:number
    name:string
}
type MessagesType = {
    id:number
    message:string
}

const App = (props:AppPropsType) => {
    /*let posts = [
        {id: 1, message: 'Hi,How is your day?', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 8},
        {id: 2, message: 'HEy?', likesCount: 25},
        {id: 2, message: 'yo yo Yo?', likesCount: 10},
    ]*/
   /* let dialogs = [
        {id: 1, name: 'Artyom'},
        {id: 2, name: 'Nadya'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Elena'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Olga'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hello'},
    ]*/

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs}  messages={props.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
