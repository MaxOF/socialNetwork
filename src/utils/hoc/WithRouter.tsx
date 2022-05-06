import React from "react";
import {Nullable} from "../../api/api";
import {useLocation, useParams} from "react-router-dom";

export const withRouter = (WrappedComponent: typeof React.Component) => (props: WrappedComponentWithRouterPropsType) => {

    const params = useParams<'userId'>();
    const location = useLocation()

    return (

        <WrappedComponent
            {...props}
            userId={params.userId}
            location={location}
        />
    )
}

export const withRouter2 = <T extends object>(WrappedComponent: React.ComponentType<T>) => (props: T) => {

    const params = useParams<'userId'>();
    const location = useLocation()
    return (

        <WrappedComponent
            {...props as T}
            userId={params.userId}
            location={location}
        />
    )
}

export type locationType = {
    hash: string
    key: string
    pathname: string
    search: string
    state: Nullable<object>
}

export type WrappedComponentWithRouterPropsType = {
    userId: string
    location: locationType
}

export type InjectedProps = {
    userId: string
}