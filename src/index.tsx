import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi,How is your day?', likesCount: 12},
    {id: 2, message: 'How are you?', likesCount: 8},
    {id: 3, message: 'HEy?', likesCount: 25},
    {id: 4, message: 'yo yo Yo?', likesCount: 10},
    {id: 5, message: 'Blabala', likesCount: 143},
]

let dialogs = [
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
]



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        < App
            posts={posts}
            dialogs={dialogs}
            messages={messages}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
