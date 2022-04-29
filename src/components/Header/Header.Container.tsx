 import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";



type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        //здесь должен будет быть тоггл (посмотреть как заюзать один редьюсер в двух компонентах)
        //заюзать DAL
        this.props.getAuthUserData();
    }

    render() {
       return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect (mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);