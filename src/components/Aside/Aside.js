import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    aside_wrapper: {
        minHeight: 850,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

    }
}))

function Aside({ children, className = '', ...rest}) {
    const classes = useStyles();
    
    return (
        <Grid constiner item lg={4} md={4} sm={4} xs={4} className={`${classes.aside_wrapper} ${className}`} {...rest}>
         {children}   
        </Grid>
    )
}

export default Aside;
