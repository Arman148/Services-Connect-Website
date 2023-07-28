import React from 'react';
import './input.css';

const STYLES = [
    "input--default--solid",
    "input--border--solid",
    "input--borderRounded--solid",
    "input--default--outline",
    "input--border--outline",
    "input--borderRounded--outline",
    "input--default--borderRounded--outline",

]

const SIZES = [
    "input--default",
    "input--big",
    "input--medium",
    "input--small",
]

 const Inputs = ({
    children,
    onChange,
    className,
    value,
    inputStyle,
    inputSize,
    ...rest
}) => {
    
    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

    const checkInputSizes = SIZES.includes(inputSize) ? inputSize : SIZES[0]

    return(
        <input 
         className={`input ${checkInputStyle} ${checkInputSizes} ${className}`}
         onChange={onChange}
         value={value}
         {...rest}
        />
    )
}


export default Inputs;