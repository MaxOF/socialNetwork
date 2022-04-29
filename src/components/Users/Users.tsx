import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";



type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // const indexOfLastPage = props.currentPage + props.pageSize;
    // const indexOfFirstPage = indexOfLastPage - props.pageSize;
    // const sortedPages = pages.slice(indexOfFirstPage - 1, indexOfLastPage)

    return (
        <div className={styles.pagination}>
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
                                        ? <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                        :
                                        <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.follow(u.id)}}>Follow</button>
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
            <div>
                {pages.map((p, id) => {
                    return <span key={id} className={props.currentPage === p ? styles.selectedPage : styles.pages}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
        </div>
    );
};

export default Users;