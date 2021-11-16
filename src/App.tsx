import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.css';

const App = (props: any) => {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile' element={<Profile/>}/>

                    </Routes>
                </div>
            </Router>
        </div>

    );
}

export default App;
