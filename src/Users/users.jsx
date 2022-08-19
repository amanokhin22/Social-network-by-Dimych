import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./user";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {props.users.map(user => <User followingInProgress={props.followingInProgress}
                                           key={user.id}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                                           user={user}/>
            )
            }
        </div>
    </div>
}

export default Users