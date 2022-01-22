import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {

    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (userId: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pagination}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.pages}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                         className={styles.userPhoto} alt='userPhoto'/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleIsFollowingProgress(true, u.id)
                                            axios.delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "388bfada-eaf0-4fb8-962d-146794c7cccb"
                                                    }
                                                }
                                            )
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleIsFollowingProgress(false, u.id)
                                                })
                                        }}>Unfollow</button>
                                        :
                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleIsFollowingProgress(true, u.id)
                                            axios.post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "388bfada-eaf0-4fb8-962d-146794c7cccb"
                                                    }
                                                }
                                            )
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleIsFollowingProgress(false, u.id)
                                                })

                                        }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;