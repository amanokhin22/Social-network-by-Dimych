import React from "react";
import userPhoto from "../asets/images/users.png";
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {


        pages.push(i);
    }

    return <div>
        <div> {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={() => {
                             props.onPageChanged(p);
                         }}>{p}</span>
        })}
        </div>
        {props.users.map(user => <div key={user.id}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto
                    } className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button onClick={() => {
                        axios.delete(`http://localhost:3001/follow-post/${user.id}`,{
                            withCredentials: true
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(user.id)
                                }
                            });

                    }}>Unfollow</button>
                    : <button onClick={() => {
                        axios.post(`http://localhost:3001/follow-post/${user.id}`, {}, {
                            withCredentials: true
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(user.id)
                                }
                            });
                    }}>Follow</button>}

            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>

            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>

        </div>)}
    </div>
}

export default Users