import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {},
    mainAlign: {
      maxWidth: 1420,
      paddingTop: 120
    }
}))

export default function Main({ children, className = '', ...rest }) {
    const classes = useStyles();

    return (
        <Grid container justify='center' className={classes.main}>
            <Grid container item className={classes.mainAlign} {...rest}>
                {children}
            </Grid>
        </Grid>
    )
}
