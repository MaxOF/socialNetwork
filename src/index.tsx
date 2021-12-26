import './index.css';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            dispatch={store.dispatch.bind(store)}
            store={store}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe( rerenderEntireTree)