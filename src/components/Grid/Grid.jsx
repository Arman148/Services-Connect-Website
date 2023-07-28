import React from 'react';
import { format } from 'timeago.js';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'





const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px auto',
    display: 'flex',
    backgroundColor: "#fff",
    width: '80%',
    minHeight: 100,
    borderRadius : '10px',
    flexDirection : 'column'
  },
  textField: {
    margin: "0 30px",
    //width: "600px",
   // minHeight:'50px',
    fontSize: 16, 
    color: '#222222',
    //overflowY : 'hidden'

  },
  image_style: {
    margin: '20px 30px',
    width: 30,
    height: 30

  },

  text_area:{
    margin:'23px 0 18px 0',
    fontSize:'15px',
    color:'black',
    width:'100px',
    height:'30px',
    fontWeight: 'bold',
  },
  time:{
    margin:'23px 0 18px 0',
    fontSize:'12px',
    color:'black',
    width:'100px',
    height:'30px',
  },
  header : {
    display : 'flex',
    justifyContent : 'space-between'
  },
  name : {
    display : 'flex'
  }
}));

export default function FullWidthGrid({ text, avatar,name,date }) {
 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
    <div className={classes.name}>
    <Avatar src={avatar} className={classes.image_style} />
    
    <Typography
      className={classes.text_area} noWrap paragraph>
       {name} 
    </Typography>
    </div>
    <Typography
          className={classes.time}  paragraph>
          {format(date)} 
        </Typography>
      </div>
      <InputBase
        value={`${text}`}
        className={classes.textField}
        multiline
      />   
      </div>
    
  );
}