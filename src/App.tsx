import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header.Container";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import Preloader from "./components/common/preloader/Preloader";


const App = () => {

    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)

    useEffect(() => {
        initializeApp()
    }, [])

    return (
        <div className='app-wrapper'>
            {!initialized
                ? <Router>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>}
                        />
                        <Route path='/profile/*' element={<ProfileContainer/>}
                        />
                        <Route path='/users' element={<UsersContainer/>}
                        />
                        <Route path='/login' element={<Login/>}
                        />
                    </Routes>
                </div>
            </Router>
                : <Preloader />}
        </div>
    );

}

export default App;
