import React,{ useState } from 'react';
import '../Form/LoginForm.css';
import Input from '../input/input';
import Button from '../Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  formcss: {
    width: '100%',
    maxWidth: '360px',
  },
  '@media only screen and (max-width: 1200px)': {
    formcss: {
      width: '100%',
      maxWidth: '320px',
    }
  },

}));

function FormRegister ({ user, onRegister }) {
  const classes = useStyles();
  const [ userData, setUserData ] = useState({name: '', email: '', password: ''})
  const [picture, setPicture] = useState(null)
  const {name,email,password} = userData
  
  const handlesubmit = (e) => {
    e.preventDefault()
    if(userData.name && userData.password && userData.email ) {
      onRegister(name, email, password, picture);
    } else {
      console.log('Wrong');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData ({ ...userData, [name]: value});
  }

    return (
        <div className="card" >
            <form 
            onSubmit={handlesubmit} 
            className={classes.formcss}>
              <p className="signcontinue">Creata an account</p>

                <div className="form-group">
                  <label htmlFor="exampleInputText">First and last name</label>
                  <Input 
                    onChange={handleChange}
                    className="login-form_input"
                    type="text" 
                    inputStyle="input--default--borderRounded--outline" 
                    inputSize="input--small"
                    value={name}
                    name='name'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEnail">Email address</label>
                    <Input 
                      onChange={handleChange}
                      type="email" 
                      name="email"
                      value={email}
                      className="login-form_input"
                      inputStyle="input--default--borderRounded--outline" 
                      inputSize="input--small"/>
                <div className="link_pass">
                  <a 
                    id="emailHelp" 
                    className="form-text text-muted"
                    href=" ">
                    Forgot your password?
                  </a>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassWord">Password</label>
                  <Input 
                    onChange={handleChange}
                    className="login-form_input"
                    type="password" 
                    inputStyle="input--default--borderRounded--outline" 
                    inputSize="input--small"
                    value={password}
                    name='password'
                  />

                </div>
                
                <small className="small">At least 8 characters, one uppercase, one lowercase letter, one special symbol.</small>
                
                <div className="form-group-browse" >
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                    inputStyle="input--borderRounded--outline"
                    inputSize="input--small"
                    className="login-form_input"
                  /> 
                  <label htmlFor="file" id="up"  >
                  <div className="file-name" id="browse">
                    {picture && `${picture.name}`}
                  
                    <label className="browse-style" htmlFor="file" >Browse</label>
                    </div>
                  </label>                

                </div>
                </div>
                <Button
                  buttonStyle="SIGN"
                  onClick={() => {}}
                  >Sign Up</Button>
                <small className="small">By creating an account, you agree to service’s <a>Conditions of Use</a> and <a>Privacy Notice</a>.</small>
        </form> 
        </div>
  
    )
  }
  
  export default FormRegister;
  