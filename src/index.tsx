import './index.css';
import store, {RootStateType} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            messageForNewPost={store.getState().profilePage.messageForNewPost}
            store={store}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => rerenderEntireTree(store.getState()))