import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header.Container";



const App = () => {


    return (
        <div className='app-wrapper'>
            <Router>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />}
                        />
                        <Route path='/profile/*' element={<ProfileContainer />}
                        />
                        <Route path='/users' element={<UsersContainer />}
                        />
                        <Route path='/login' element={<UsersContainer />}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
