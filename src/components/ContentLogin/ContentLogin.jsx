import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './contentlogin.style.css';
import LoginForm from '../Form/LoginForm.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperLeft: {
    boxShadow: 'none',
    background: '#fff',
    position: 'relative',
    height: 'calc(100vh - 100px)',
  },
  paperRight: {
    height: 'calc(100vh - 100px)',
    boxShadow: 'none',
    background: '#EFF3F8',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '240px'
  },
  contentLoginBlog: {
    display: 'flex',
    justifyContent: 'center',
  },
  'banner-header': {
    width: '621px',
    fontSize: '56px',
    lineHeight: '60px',
    marginTop: '232px',
    fontFamily: 'Raleway Regular',
},

'banner-text': {
    marginTop: '25px',
    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: 'Raleway Medium',
    fontStyle: 'italic',
    width: '682px'
},
  footerblock: {
    background: '#8f94c3',
    height: '218px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
},
  '@media only screen and (max-width: 1600px)': {
    paperRight: {
        paddingTop: '120px',
    },
    'banner-header': {
        width: '100%',
        maxWidth: '600px',
        fontSize: '48px',
        lineHeight: '48px',
        margin: '115px auto 0',
    },
    'banner-text': {
      width: '100%',
      maxWidth: '600px',
      margin: '25px auto',
    },
    footerblock: {
      height: '100px',
    }
  },

  '@media only screen and (max-width: 1200px)': {
    'banner-header': {
        width: '100%',
        maxWidth: '400px',
        fontSize: '32px',
        lineHeight: '32px',
        margin: '115px auto 0',
    },
    'banner-text': {
      width: '100%',
      maxWidth: '400px',
      margin: '25px auto',
    }
  },
  }));

const ContentLogin = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
            
              <Grid item xs={7}>
                  <Paper className={classes.paperLeft} >
                    <div className={classes.contentLoginBlog}>
                      <div>
                        <h2 className={classes['banner-header']}>We provide wide range of services for any need.</h2>
                        <p className={classes['banner-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus at elit malesuada egestas. Vivamus aliquet lorem nunc, at feugiat libero tempus at.</p>
                      </div>
                    </div>
                    <div className={classes.footerblock}></div>
                  </Paper>
              </Grid>
              <Grid item xs={5}>
                  <Paper className={classes.paperRight} >
                      <LoginForm onLogin={props.onLogin} isLogging={props.isLoading}/>
                  </Paper>
              </Grid>
            
            </Grid>
        </div>
    );
};

export default ContentLogin;