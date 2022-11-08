import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import  {RootStateType} from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

 const renderTree = (state: RootStateType)=>{
    root.render(
            <App dispatch={store.dispatch.bind(store)} store={store} />
    );
}
renderTree(store.getState())
store.subscribe(()=>{
    let state = store.getState()
    renderTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
