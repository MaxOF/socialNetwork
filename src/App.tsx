import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.css';
import {ActionsType, RootStateType, StoreType} from "./redux/store";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
    messageForNewPost: string
    store: StoreType
}

const App = (props: PropsType) => {
        return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={ <Dialogs store={props.store} dispatch={props.dispatch}/>}/>
                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                            messageForNewPost={props.messageForNewPost}
                        />}/>

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
