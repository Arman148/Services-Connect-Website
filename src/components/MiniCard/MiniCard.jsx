import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    width: "300px",
    margin: "20px",
  },
  avatar: {
    width: "66px",
    height: "66px",
    opacity: 1
  },
  content: {
    width: "300px",
    height: "200px",
    backgroundColor: "#EFF3F8"
  },
  title: {
    height: "19px",
    opacity: 1,
    textAlign: "left",
    letterSpacing: 0,
    color: "#8F94C3",
    marginTop: "12px"
  },
  text: {
    width: "244px",
    height: "56px",
    opacity: 1,
    textAlign: "left",
    fontSize: "12px",
    letterSpacing: 0,
    color: "#222222",
    marginBottom: "10px"
  },
  name: {
    width: "62px",
    height: "16px",
    opacity: 1,
    textAlign: "left",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#222222"
  },
  details: {
    width: "44px",
    height: "16px",
    opacity: 1,
    letterSpacing: 0,
    textAlign: "right",
    color: "#222222"
  },
  arrowForwardIcon: {
    width: "16px",
    height: "16px",
    color: "#5860AF",
    opacity: 0.54,
    textAlign: "right"
  },
  action: {
    marginTop: "20px",
    width: "300px",
    height: "200px"
  },
  header: {
    marginTop: "20px",
    height: "10px",
    opacity: 1,
    cursor : 'pointer'
  },
  detail_mini:{
    display:"flex",
    justifyContent:"flex-end"
  }
}));

const MiniCard = props => {
  const classes = useStyles();
  let history = useHistory()
  const {ownerId, avatar,uid } = props;

  const goToUser = (ownerId) => {
    if (uid && ownerId === uid) {
      history.push('/profile')
    } else {
      history.push(`/OtherProfile/${ownerId}`)
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={avatar} onClick={() => goToUser(ownerId)} className={classes.avatar} />}
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {props.text}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          className={classes.name}
        >
          {props.name}
        </Typography>
        
      {/* <div className={classes.detail_mini}>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          className={classes.details}
        >
          Details
        </Typography>
        <IconButton aria-label="delete" size="small">
          <ArrowForwardIcon
            className={classes.arrowForwardIcon}
            fontSize="inherit"
            onClick={()=>{alert(54)}}
          />
        </IconButton>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default MiniCard;
