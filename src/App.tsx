import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


import './App.css';
import {ActionsType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {


    return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={
                            <DialogsContainer />}
                        />
                        <Route path='/profile' element={
                            <Profile />}
                        />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
