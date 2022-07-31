import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import b from './DialogsItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/1' + props.id
    return (
        <div className={b.dialogs}>
            <div>
                <div className={b.dialogs}>
                </div>
                <div>
                    <NavLink activeClassName={s.activeLink}
                             to={path}>{props.name}</NavLink>
                </div>
                <img alt=''
                    src='https://image.shutterstock.com/image-illustration/striped-technology-hitech-scifi-background-260nw-1823831972.jpg'/>
            </div>
        </div>
    )
};
export default DialogItem