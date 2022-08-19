import React from "react";
import styles from './Paginator.module.css';


const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div> {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
                     onClick={() => {
                         props.onPageChanged(p);
                     }}>{p}</span>
    })}
    </div>

}

export default Paginator