import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        //здесь должен будет быть тоггл (посмотреть как заюзать один редьюсер в двух компонентах)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }
        )
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
       return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);