import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
            <img alt='Haven`t'
                src='https://image.shutterstock.com/image-illustration/striped-technology-hitech-scifi-background-260nw-1823831972.jpg'/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>

        </div>
    )
}

export default Post