import React, { useEffect } from "react";
import ServiceCard from "../../components/ServiceCard";
import Textarea from "../../components/Textarea";
import Grid from "../../components/Grid";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from "react-redux";
import { serviceGetByIdThunk } from "../../thunks";

const buttonStyle = {
  width: "auto",
  marginBottom: "5px",
  fontSize: '1.5rem',
  fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  color : "#5860AF",
  cursor : 'pointer',
  border: 'none',
  outline: 'none',
}

const Details = ({ id, getServiceById,user, serviceById, name, setChange,change, uid,showOnlyComments,scrollTo }) => {

  const {
    title,
    dislikes = [],
    comments = [],
    likes = [],
    description,
    owner = {}
  } = serviceById;



  useEffect(() => {
    getServiceById(id);
    return ()=>{
      getServiceById(null)  
    }
  }, []);
  

  return (
    <div>
      { !showOnlyComments ?
        <ServiceCard
        user={user}
        title={title}
        uid={uid}
        id={id}
        likes={likes}
        comments={comments.length}
        change={change}
        dislikes={dislikes}
        text={description}
        avatar={owner.photoURL}
        ownerId={owner.id} 
      /> :
      <ArrowBackIosIcon onClick ={()=>{setChange(null); scrollTo();}} style ={buttonStyle}></ArrowBackIosIcon>
      }
    
      {uid && <Textarea setChange={setChange} user={user} id={id} avatar ={owner.photoURL} uid={uid} />}
      {comments.sort((a,b)=>{
                  return new Date(b.create) - new Date(a.create)}).map(el => {
      return <Grid key={el.id} date={el.create} text={el.comment} name={el.name} avatar={el.photoURL} />;
        })}
    </div>
  );
};

const mapStateToProps = ({ service }) => {
  return {
    serviceById: service.serviseById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getServiceById: id => {
      dispatch(serviceGetByIdThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
