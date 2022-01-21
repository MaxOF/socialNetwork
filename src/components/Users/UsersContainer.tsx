import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers,
    toggleIsFetching, unfollow,
    UserType
} from "../../redux/users-reducer";

import Users from "./Users";
import ContentLoader from 'react-content-loader'
import {usersAPI} from "../../api/api";



type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? (
                <ContentLoader
                    speed={1}
                    width={400}
                    height={250}
                    viewBox="0 0 400 250"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="6" y="176" rx="3" ry="3" width="105" height="26" />
                    <rect x="6" y="114" rx="3" ry="3" width="90" height="26" />
                    <circle cx="41" cy="42" r="40" />
                    <rect x="6" y="85" rx="3" ry="3" width="66" height="26" />
                    <rect x="6" y="145" rx="3" ry="3" width="145" height="26" />
                </ContentLoader>
            ) : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);
