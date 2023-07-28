import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./createService.styles.css";
import Typography from "@material-ui/core/Typography"
import Button from "../Button";
import Select from "../Select";
import { serviceExample } from "../../constants";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//import classes from "*.module.css";

const useStyles = makeStyles(theme => ({
 margin:{
   width:"100%"
 },
 back : {
   display:'flex',
   color : 'red',
   maxWidth : '80px',
   cursor : 'pointer',
   color : '#7577DF'
 },
 listTextBack:{
  marginBottom: 30,
  fontFamily:' Raleway Regular',
  color: "#5860AF"
},
listText:{
  fontFamily:' Raleway Regular',
  color: "#5860AF"
},

}));
function UpdateProfile({
  create,
  setChange,
  update,
  prevService,
  user,
  id,
  change,
  errorModal
}) {
  const owner = {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL
  };
  const [service, setService] = useState({
    title: "",
    description: "",
    serviceCategory: ""
  });
  const { title, serviceCategory, description } = service;

  const serviceData = {
    title,
    description,
    comments: [],
    create: Date.now(),
    dislikes: [],
    likes: [],
    link: "",
    owner,
    serviceCategory
  };
  const classes = useStyles();
  useEffect(() => {
    if (prevService) setService(prevService);
  }, []);

  const handlesubmit = e => {
    e.preventDefault();
    if (service.title && service.serviceCategory && service.description) {
      if (create && update) {
        errorModal({
          text: "Send to props only <create> or <update> property!"
        });
      } else if (create) {
        create(serviceData);
        setChange(null);
      } else if (update) {
        update(id, service);
        setChange(null);
      } else console.log("No sent <create> or <update> property in props!");
    } else {
      errorModal({
        text: "Wrong fields!"
      });
    }
    setService(serviceExample);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  return (
    <div className="card card-body my-3 login-form">
      <div className={classes.back} onClick={() => setChange(null)}>
        <ArrowBackIosIcon className={classes.back} />
      <Typography variant="h5" className={classes.listTextBack}> Back</Typography>
      </div>
      <Typography variant="h5" className={classes.listText}> Add new service</Typography>
      <form onSubmit={handlesubmit} className="createServiceForm">
        <div className="form-group">
          <TextField
            onChange={handleChange}
            className="login-form_input"
            type="text"
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
          />
        </div>
        <div className="selectStyle">
          <Select
            onChange={handleChange}
            name="serviceCategory"
            value={serviceCategory}
            className='selectStyle'
          />

          <div className="form-group">
            <TextField
              onChange={handleChange}
              className="login-form_input"
              type="text"
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              multiline
              rows="4"
              value={description}
            />
          </div>
        </div>
        <Button
          buttonStyle="SIGN"
          className="createServiceBtn"
          onClick={handlesubmit}
        >
          {change === "Create" ? "Create" : "Update"}
        </Button>
      </form>
    </div>
  );
}

export default UpdateProfile;
