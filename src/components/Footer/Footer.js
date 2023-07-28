import React from 'react'
import Grid from '@material-ui/core/Grid';

function Footer({ children, className = '', ...rest}) {
    return (
        <Grid container lg={12} md={12} sm={12} xs={12} {...rest}>
          {children}
        </Grid>
    )
}

export default Footer;
