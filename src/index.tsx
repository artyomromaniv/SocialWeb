import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {addPost, changeNewPostText, RootStateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

 const renderTree = (/*state:RootStateType*/)=>{
    root.render(
        <React.StrictMode>
            < App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
        </React.StrictMode>
    );
}
renderTree()

subscribe(renderTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
