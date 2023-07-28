import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import Input from '../input/input'
import Button from '../Button'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import { userUpdateThunk } from '../../thunks';
import { getUser } from '../../utils';


const useStyles = makeStyles(theme => ({
  formcss: {
    width: '100%',
    maxWidth: '360px'
  },
  '@media only screen and (max-width: 1200px)': {
    formcss: {
      width: '100%',
      maxWidth: '320px'
    }
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: 'translate(-50%, -50%)'
  },
  header: {
    marginTop: '20px'
  },
  browseInp: {
    marginTop: '20px',
    marginBottom: '20px',
    height: '40px'
  }
}))

function UserUpdate ({ handleClose,user, handleOpen,setUserData, open ,updateUser, phone, change}) {
  const classes = useStyles()
  const [update, setUpdate] = useState({
    displayName: (user?  user.displayName: ""),
    phoneNumber: phone,
    id : user ? user.uid : null
  })

  const [changePicture, setChangePicture] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setUpdate({ ...update, [name]: value })
  }

  const handleSubmit = (e) => {
    //e.preventDefault()
    if(update.displayName) {
      updateUser(update, changePicture);
      handleClose()
      getUser(setUserData)
    } else {
      console.log('Wrong');
    }
  }
  
  return (
    <div>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <div className={classes.formcss}>
            <div className='form-group'>
              <p>Update your Data</p>

              <TextField
                className={classes.header}
                id='outlined-basic'
                label='Name'
                variant='outlined'
                onChange={handleChange}
                name='displayName'
                value = {update.displayName}
              />
              <TextField
                className={classes.header}
                id='outlined-basic'
                label='Phone'
                variant='outlined'
                onChange={handleChange}
                type='number'
                name='phoneNumber'
                value = {update.phoneNumber}
              />
            </div>
            <div className='form-group-browse'>
              <Input
                type='file'
                id='file'
                onChange={e => setChangePicture(e.target.files[0])}
                inputSize='input--small'
              />
              <label htmlFor='file' id='up'>
                <div className={classes.browseInp} id='browse'>
                  {changePicture && `${changePicture.name}`}
                </div>
                <label htmlFor='file'>Browse</label>
              </label>
            </div>
            <Button buttonStyle='SIGN' onClick={(e)=>{
              change(null)
              return handleSubmit(e)}}>
              Update
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
    state: state.user.user
})


const mapDispatchToProps = (dispatch) => ({
    updateUser: (data, picture) => {
        dispatch(userUpdateThunk(data, picture))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
