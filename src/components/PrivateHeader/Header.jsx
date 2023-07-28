import { NavLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import fb from '../../vendor/sdk';
import './privateHeader.css'

const useStyles = makeStyles(theme => ({
  header: {
    height: 120,
    position: 'fixed',
    background: '#fff',
    zIndex: 100,
  },
  headerCenter: {
    maxWidth: 1420
  },
  nav: {
    '& a': {
      position: "relative",
      fontFamily: 'Raleway Regular',
      fontSize: 20,
      cursor: 'pointer',
      color: '#222222',
      marginLeft: 44,
      paddingBottom: 5,
    },
    '& a::before': {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      margin: "auto",
      bottom: 0,
      width: 0,
      height: 1,
      backgroundColor: "#222222",
      transition: "width .3s"  
    },
    '& a:hover': {
      textDecoration: 'none',
      '&::before': {
        width: "100%"
      }
    }
  }
}));



const PrivateHeader = ({user,myProfile}) => {
  const classes = useStyles();
  const logOut = async () =>{
    await fb.users.updateProfile({
      online: false,
      lastOnline: Date.now()
    });
    fb.logout()
    localStorage.removeItem('Ip-user')
  }

  return (
    <Grid container justify="center" className={classes.header}>
      <Grid container item className={classes.headerCenter}>
        <Grid item lg={4} md={4} sm={4}>
          <h1 className="logo-font"> <Link component={NavLink} to='/' color="inherit">
            service.
          </Link></h1>
        </Grid>
        <Grid container justify="flex-end" item className={classes.nav} alignItems="center" lg={8} md={8} sm={8}>
          <Link activeClassName="selected-private-route" component={NavLink} to='/' color="inherit">
            Home
          </Link>
          {user && !myProfile?<Link activeClassName="selected-private-route" component={NavLink} to='/profile' color="inherit">
            My Profile</Link>       
          :user && myProfile?"": <Link activeClassName="selected-private-route" component={NavLink} to='/login' color="inherit">
            Sign In</Link>} 
            
            {!user?<Link activeClassName="selected-private-route" component={NavLink} to='/registration' color="inherit">
            Sign Up</Link>
            :
            <Link activeClassName="selected-private-route" component={NavLink} to='/login' color="inherit" onClick={()=>logOut()}>
             Sign Out</Link>}
            
            
        </Grid>
      </Grid>
    </Grid>
  );
}


export default PrivateHeader;
