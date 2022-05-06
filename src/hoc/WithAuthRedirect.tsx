import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/store";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirect => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mapStateToPropsForRedirect) {

        let {isAuth, ...restProps} = props

        return <>
            {isAuth ? (
                <Component {...restProps as T}/>
            ) : (
                <Navigate to={'/login'}/>
            )}
        </>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}