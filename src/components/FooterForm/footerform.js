import React from 'react'
import "./footerform.css"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Input from '../input/input';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';



const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#fff",
    width: '100%',
    minHeight: 300,
  },
}));

function footerform() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Grid container className="container">
                <Grid item xs={3}>
                  <Grid className="grid">
                    <Typography className="typography">
                       <p className="customer">Customer Service</p>
                        <Link href="#" className="link">
                        Contact Us
                        </Link>  
                        <Link href="#" className="link">
                         Payment
                        </Link>
                    </Typography>  
                  </Grid>
                                       
                </Grid>
                <Grid item xs={3}>
                  <Grid className="grid">
                    <Typography className="typography">
                       <p className="customer">Information</p>
                        <Link href="#" className="link">
                          Privacy Policy  FAQ
                        </Link>  
                        <Link href="#" className="link">
                          Terms & Conditions
                        </Link>
                        <Link href="#" className="link">
                          FAQ
                        </Link>
                    </Typography>  
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid className="grid">
                    <Typography className="typography">
                       <p className="customer">Customer Service</p>
                        <Link href="#" className="link">
                          Subscribe via Email
                        </Link>  
                        <Link href="#" className="link">
                          Don’t miss your daily portion of inspiration!
                        </Link>
                        <Grid>
                          <input className="emailAddress" placeholder="Email Address"/>
                          <button className="btn"><p>Subscribe</p></button>
                        </Grid>
                        
                    </Typography>  
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                   <Grid className="grid">
                    <Typography className="typographyIcons">
                       <InstagramIcon className="icons"/>
                       <TwitterIcon className="icons"/>
                       <FacebookIcon className="icons"/>
                       <PinterestIcon className="icons"/>
                    </Typography>  
                  </Grid>
                </Grid>
                <Grid className="english">
                  <Grid items xs={6} className="allRightsReserved">
                    <p>@ 2020 service. All Rights Reserved</p>
                  </Grid>
                  <Grid items xs={6} className="allRightsReservedEnglish">
                    <p>English</p>
                  </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default footerform;
