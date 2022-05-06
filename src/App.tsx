import React from 'react';
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom';
import style from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";

import './App.module.scss';

import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/store";

import {Loading, Preloader} from "./common";
import {initializeApp} from "./redux/appReducer/thunks/thunks";
import {getInitializedAppSelector} from "./selectors/selectors";
import Header from "./components/Header/Header";
import News from "./components/MainWindow/News/News";
import UsersPage from "./components/MainWindow/Users/UsersPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import ProfileContainer from "./components/MainWindow/Profile/ProfileContainer";
import DialogsContainer from "./components/MainWindow/Dialogs/DialogsContainer";


export enum PATH {
    PROFILE = '/profile',
    DIALOGS = '/dialogs',
    USERS = '/users',
    NEWS = '/news',
    LOGIN = '/login',
    CHAT = '/chat',
    PAGE_NOTE_FOUND = '/*',
    MAIN_PAGE = '/',
}


class App extends React.Component<AppContainerType, AppContainerType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <main className={style.appContent}>
                <Header/>
                <Navbar/>
                <div className={style.appContentWindow}>
                    <Routes>
                        <Route path={PATH.MAIN_PAGE} element={<Navigate to={PATH.PROFILE}/>}/>

                        <Route path={PATH.PROFILE} element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path={PATH.DIALOGS} element={<DialogsContainer/>}>
                            <Route path=":userId" element={<DialogsContainer/>}/>
                        </Route>

                        <Route path={PATH.USERS} element={<UsersPage/>}/>
                        <Route path={PATH.NEWS} element={<News/>}/>
                        <Route path={PATH.LOGIN} element={<Login/>}/>
                        <Route path={PATH.PAGE_NOTE_FOUND} element={<PageNotFound/>}/>
                    </Routes>
                </div>
                <Footer/>
            </main>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: getInitializedAppSelector(state)
})

const AppContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    initializeApp,
})(App)

export const MainApp = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.Suspense>
    )
}


//Types=====================================================================

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToPropsType = {
    initializeApp: () => void
}

type AppContainerType = mapStateToPropsType & mapDispatchToPropsType
