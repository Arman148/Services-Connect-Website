import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './header.style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperRight: {
    height: 100,
    boxShadow: 'none',
    background: '#fff',
  },
  paperLeft: {
    height: 100,
    boxShadow: 'none',
    background: '#EFF3F8',
    display: 'flex',
    justifyContent: 'center',
  },
}));


const Header = () => {
  const classes = useStyles();

 

  return (

    <div className={classes.root}>
      <Grid container>
        <Grid item xs={7}>
          <Paper className={classes.paperRight} >
            <h1 className="logo-font">service.</h1>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paperLeft} >
            <ul className='nav_ul'>
              <NavLink color="inherit"
                className={classes.link}
                activeClassName="selected-route"
                exact
                to='/' >
                Home
                </NavLink>
              <NavLink
                className={classes.link}
                activeClassName="selected-route"
                to='/registration'
              >
                Sign Up
                </NavLink>
              <NavLink
                activeClassName="selected-route"
                className={classes.link}
                to='/login'
              >
                Sign In
              </NavLink>
            </ul>
          </Paper>
        </Grid>

      </Grid>
    </div>

  );
}

export default Header;
