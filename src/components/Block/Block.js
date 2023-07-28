import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    block_wrapper: {
        backgroundColor: '#EFF3F8',
        minHeight: 850,
        padding:"25px"
    }
}))

function Block({ children, className = '', ...rest}) {
    const classes = useStyles();

    return (
        <Grid lg={8} md={8} sm={8} xs={8} className={`${classes.block_wrapper} ${className}`} {...rest}>
            {children}
        </Grid>
    )
}

export default Block
