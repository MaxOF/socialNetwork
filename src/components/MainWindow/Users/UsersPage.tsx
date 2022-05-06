import React from 'react';
import style from './Users.module.scss'

import {useSelector} from "react-redux";
import {Users} from './Users';

import {Preloader} from "../../../common";
import {getIsFetching} from "../../../selectors/selectors";
import {ReturnComponentType} from "../../../api/api";



const UsersPage: React.FC = (): ReturnComponentType => {

    const isFetching: boolean = useSelector(getIsFetching)

    return (
        <section className={style.page}>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </section>
    )
}

export default UsersPage
