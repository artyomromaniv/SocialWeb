import React from 'react';
import reportWebVitals from './reportWebVitals';
import store, {AppStateType} from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

 let renderTree = (state: AppStateType)=>{
    root.render(
        <BrowserRouter>
            <Provider store={store} >
                <App dispatch={store.dispatch.bind(store)} store={store} />
            </Provider>
        </BrowserRouter>
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
