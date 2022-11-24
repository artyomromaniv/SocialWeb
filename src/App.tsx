import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {ActionsTypes, RootStateType, StoreType} from "./redux/store";
import {TReduxStore} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: TReduxStore
    dispatch:(action:ActionsTypes)=>void
   }

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        //<BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/profile' element={<Profile state={state}
                                                                 dispatch={props.dispatch}
                        />}
                        />
                    </Routes>
                </div>
            </div>
        //</BrowserRouter>
    );
}

export default App;
