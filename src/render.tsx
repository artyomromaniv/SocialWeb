import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {RootStateType} from './redux/state';
import {addPost} from "./redux/state";

export let renderTree = (state:RootStateType)=>{
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            < App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}
renderTree(state)

