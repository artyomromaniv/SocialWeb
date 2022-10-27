import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {changeNewPostText, RootStateType} from './redux/state';
import {addPost} from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderTree = (state:RootStateType)=>{
    root.render(
        <React.StrictMode>
            < App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
        </React.StrictMode>
    );
}
renderTree(state)

