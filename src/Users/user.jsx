import React from "react";
import userPhoto from "../asets/images/img_1.png";
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';


const User = ({user, followingInProgress, unfollow, follow }) => {
    return <div>
         <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto
                    } className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }
                              }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }
                              }>Follow</button>}

            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>

            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>

        </div>)
    </div>
}

export default User