import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './content.style.css';
// import Form from '../../components/Form/LoginForm.js'
// import FormRegister from '../../components/FormRegister/FormRegister.js'

const useStyles = makeStyles(theme => ({
    root: {
      
      flexGrow: 1,
      
    },
    paperLeft: {
      boxShadow: 'none',
      background: '#fff',
      position: 'relative',
      height: 'calc(100vh - 332px)',
    },
    paperRight: {
      height: 'calc(100vh - 100px)',
      boxShadow: 'none',
      background: '#EFF3F8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    },
  }));

const Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
            
            <Grid item xs={7}>
                <Paper className={classes.paperLeft} >
                    <h2 className='banner-header'>We provide wide range of services for any need.</h2>
                    <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus at elit malesuada egestas. Vivamus aliquet lorem nunc, at feugiat libero tempus at.</p>
                    <div className="footerblock"></div>
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper className={classes.paperRight} >
                    {/* <Form/> */}
                    {/* <FormRegister/> */}
                </Paper>
            </Grid>
            
            </Grid>
        </div>
    );
};

export default Content;