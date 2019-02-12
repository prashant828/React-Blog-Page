import React from 'react';
import classes from './blogTile.module.css'

function blogTile(props) {
    return(
        <div className={classes.blogTile}>
            <h4 className={classes.heading}>{props.title}</h4>
            <p className={classes.paragraph}>{props.body}</p>
            <button className={classes["delete-button"]} onClick={props.click}>delete</button>
        </div>
    )
};

export default blogTile;
