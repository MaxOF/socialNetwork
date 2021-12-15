import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} messageForNewPost={state.profilePage.messageForNewPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)