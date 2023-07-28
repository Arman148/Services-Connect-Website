import React from 'react';
import Details from '../../components/Details'
import Modal from '@material-ui/core/Modal'
const CommentModal = (props)=>{
const {open, close,name,setChange,user,uid,id,change,showOnlyComments,scrollTo} = props

    return( <Modal  
   // aria-labelledby='simple-modal-title'
  //  aria-describedby='simple-modal-description'
  style ={{
    display: "flex",
    transition: "all 0.3s",
    overflowY: "scroll",
    outline: "none"
    }}
    open={open}
    onClose={close}>
        <div style ={{
        width: "50%",
        padding: "3vh",
        marginLeft: "38%",
        marginTop: "6%",
        position: "absolute",
        transition: "all 0.3s",
        backgroundColor:"#EFF3F8",
        borderRadius: "10px"
        }}>
    <Details
    name={name}
    setChange={setChange}
    user={user}
    uid={uid}
    id={id}
    change={change}
    showOnlyComments = {true}
    scrollTo ={scrollTo}
  />
  </div>
  </Modal>);
   
}

export default CommentModal;