import React from 'react';
import './button.styles.css';

/* Use the following values for buttonStyle property: SIGN (for both Sign Up and Sign In buttons), BROWSE, SUBMIT, 
ADDSERVICE (for both Add Service and Create / Update buttons) and in each case change the child. */

export const Button = ({buttonStyle, className = '', children, ...rest}) => {
    return (
        <button className={`button button_${buttonStyle} ${className}`} {...rest}>{children}</button>
    )
}
