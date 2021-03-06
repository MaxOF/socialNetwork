import React, {useEffect} from 'react';
import style from './Users.module.scss'

import {User} from "./User/User";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";

import {useNavigate, useSearchParams} from "react-router-dom";


import {FilterType, UserType} from "../../../redux/usersReducer/types";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../../selectors/selectors";
import {requestUsers} from "../../../redux/usersReducer/thunks/thunks";
import {ReturnComponentType} from "../../../api/api";
import {Paginator} from "../../../common/Paginator/Paginator";


export const Users: React.FC = (): ReturnComponentType => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const parsedPage = searchParams.get('page')
    const parsedTerm = searchParams.get('term')
    const parsedFriend = searchParams.get('friend')

    const totalUsersCount: number = useSelector(getTotalUsersCount)
    const currentPage: number = useSelector(getCurrentPage)
    const pageSize: number = useSelector(getPageSize)
    const filter: FilterType = useSelector(getUsersFilter)
    const users: Array<UserType> = useSelector(getUsers)
    const followingInProgress: Array<string> = useSelector(getFollowingInProgress)
    const pageValue: number = 1;

    const onPageChanged = (pageNumber: number): void => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType): void => {
        dispatch(requestUsers(pageValue, pageSize, filter))
    }

    useEffect(() => {
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsedPage) actualPage = Number(parsedPage)
        if (!!parsedTerm) actualFilter = {...actualFilter, term: parsedTerm as string}

        switch (parsedFriend) {
            case "null" :
                actualFilter = {...actualFilter, friend: null}
                break
            case "true" :
                actualFilter = {...actualFilter, friend: true}
                break
            case "false" :
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {

        const query = {} as queryObjType

        if (!!parsedTerm) query.term = parsedTerm
        if (currentPage !== pageValue) query.page = String(currentPage)
        if (parsedFriend !== null) query.friends = String(parsedFriend)

        const navigatePath = `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        navigate(navigatePath)

    }, [filter, currentPage])

    return (
        <div className={style.users}>
            {/*<UsersSearchForm*/}
            {/*    onFilterChanged={onFilterChanged}*/}
            {/*/>*/}
            <div className={style.searchResult}>
                {
                    users.map(user => {
                            return (
                                <div key={user.id}>
                                    <User
                                        user={user}
                                        followingInProgress={followingInProgress}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>
    )
}

//types====

type queryObjType = {
    term: string
    page: string
    friends: string
}
