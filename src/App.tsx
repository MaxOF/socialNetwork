import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.css';
import {ActionsType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";

type PropsType = {
    dispatch: (action: ActionsType) => void
    store: ReduxStoreType
}

const App = (props: PropsType) => {

    const state = props.store.getState()
        return (
        <div className='app-wrapper'>
            <Router>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={
                            <Dialogs
                                dialogsItems = {state.DialogsPageReducer.dialogs}
                                messages={state.DialogsPageReducer.messages}
                                newMessageBody={state.DialogsPageReducer.newMessageBody}
                                dispatch={props.dispatch}
                            />}
                        />
                        <Route path='/profile' element={
                            <Profile
                            allPosts={state.ProfilePageReducer.posts}
                            messageForNewPost={state.ProfilePageReducer.messageForNewPost}
                            dispatch={props.dispatch}

                        />}
                        />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
