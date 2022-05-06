import {Navigate} from "react-router-dom";
import React from "react";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getAuthIsAuthSelector} from "../../selectors/selectors";
import {PATH} from "../../App";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: getAuthIsAuthSelector(state)
    }
}

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate to={PATH.LOGIN}/>
        }
        return <WrappedComponent {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}

export type mapStateToPropsType = {
    isAuth: boolean
}