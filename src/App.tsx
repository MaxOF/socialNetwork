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
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}

const App = (props: PropsType) => {
        return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={ <Dialogs state={state.dialogsPage}/>}/>
                        <Route path='/profile' element={<Profile
                            profilePage={state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                            messageForNewPost={props.messageForNewPost}
                        />}/>

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
