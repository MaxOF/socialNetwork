import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {


    return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />}
                        />
                        <Route path='/profile' element={<ProfileContainer />}
                        />
                        <Route path='/users' element={<UsersContainer />}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
