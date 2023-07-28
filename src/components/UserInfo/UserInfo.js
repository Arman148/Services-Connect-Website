import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import UserUpdate from '../UserUpdate';
import Button from '../Button';
import {connect} from 'react-redux';
import {userGetPhoneThunk} from '../../thunks'
import {userPhoneNumber} from '../../actions'
import {useAuth} from '../../utils'


const useStyles = makeStyles(theme => ({
    aside_wrapper: {
        minHeight: 850
    },
    user: {     
        height: 500,

    },
    container_user: {
        display: 'flex',
        align: 'items center', 
        height: 170,
       

    },
    list:{
       marginTop: "10px"
    },
    icons:{
        color:'#9a9ec8',
        fontSize:"40px",
        
    },
    text_area: {
        marginLeft: '7%',
        
    },
    image_style: {
        width: 88,
        height: 88,
        
    },
    create: {
        color: '#FFFFFF',
        width: 135,
        height: 40,
    },
    root:{
        marginTop: "25px"
    },
    
    button_place:{
        marginTop: "10px"
       
    },
}))

const UserInfo=({change,guest,userInfo,phone,getPhone,setPhoneNull,id})=>{
    const user = useAuth()

const [userData,setUserData] = useState(user)
  
    const classes = useStyles();
      const [open, setOpen] = React.useState(false);
      useEffect(()=>{
      setPhoneNull()
      getPhone(id) 
      },[])
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
    return (
              <div className={classes.user}>
                    <Box>
                        <List className={classes.container_user}>
                            <ListItem>
                                {guest ? <Avatar src={userInfo? userInfo.photoURL:null} className={classes.image_style} /> : user ? <Avatar src={user? userData.photoURL:null} className={classes.image_style}  /> : null} 
                                <ListItemText
                                    primary={guest ? userInfo? userInfo.name : null : user? userData.displayName : null}
                                    className={classes.text_area}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                Service Member
                                  </Typography>
                                        </React.Fragment>
                                    }
                                />
                        { !guest &&
                        <IconButton  >
                        <SettingsIcon  onClick={handleOpen}/>
                        </IconButton>
                        }
                            </ListItem>
                        </List>
                    </Box>
                    {
                    phone !== "null" &&
                    <UserUpdate handleOpen={handleOpen} open={open} setUserData={setUserData} phone={phone} handleClose={handleClose} change={change} user = {user}/>
                    }  
                    <Box>
                        
                        <List className={classes.root}>

                            <ListItem className={classes.list}>
                                <ListItemAvatar>
                                    <MailOutlineIcon className={classes.icons}/>
                                </ListItemAvatar>
                                <ListItemText primary={guest ? userInfo ? userInfo.email : '...' : user ? user.email : '...'} />
                            </ListItem>

                            <ListItem className={classes.root}>
                                <ListItemAvatar>
                                    <PhoneIphoneOutlinedIcon className={classes.icons} />
                                </ListItemAvatar>
                                <ListItemText primary={guest ?userInfo  && phone !== "null" ? phone : "..." : user ? phone : '...' } />
                            </ListItem>

                            <ListItem className={classes.root}>
                                <ListItemAvatar>
                                    <MessageOutlinedIcon className={classes.icons}  />
                                </ListItemAvatar>
                                <ListItemText primary="Sent a message" />
                            </ListItem>
                           {!guest? <ListItem className={classes.button_place}>                            
                            <Button buttonStyle='SIGN'className={classes.create} onClick={()=>{change("Create")}}>
                                Create Service
                                </Button>
                            </ListItem>:""}
                           
                        </List>
                    </Box>
                </div>
    )
}

const mapStateToProps = (state) => ({
    phone : state.user.phoneNumber
})


const mapDispatchToProps = (dispatch) => ({
    getPhone: (id) => {
        dispatch(userGetPhoneThunk(id))
    },
    setPhoneNull :()=>{
        dispatch(userPhoneNumber("null"))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);  
