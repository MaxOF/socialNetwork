import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.css';
import state, {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
}

const App = (props: PropsType) => {
        return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={
                                   <Dialogs
                                       state={state.dialogsPage}
                                   />}
                        />
                        <Route path='/profile' element={<Profile state={state.profilePage}/>}/>

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
