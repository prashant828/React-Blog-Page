import React from 'react';
import {Link, Router} from 'react-router-dom';
import classes from './nav.module.css'

const nav = () => {
    return(
        <Link to='/'><div className={classes.nav}>Home</div></Link>
    )
};

export default nav;
