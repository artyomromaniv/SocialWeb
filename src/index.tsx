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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  < App posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
