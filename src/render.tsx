import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';


import {addPost, RootStateType, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} messageForNewPost={state.profilePage.messageForNewPost}/>,
        document.getElementById('root')
    );
}


