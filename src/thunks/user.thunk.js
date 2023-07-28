import firebase from '../vendor';
import { history,useAuth } from '../utils';
import { userRegisterReguest, userRegisterSuccess,userRegisterFailure,
    userLoginRequest, userLoginSuccess, userLoginFailure,
    userLogoutRequest, userLogoutSuccess, userLogoutFailure,
    userUpdateRequest, userUpdateSuccess, userUpdateFailure, modalShow,userPhoneNumber } from '../actions';

export const userLoginThunk = (data) =>  async (dispatch) => {
      try {
          dispatch(userLoginRequest())
          const res = await firebase.login(data.email, data.password)
          if(res) {
            firebase.auth.onAuthStateChanged(user => {
                if(user) {
                    dispatch(userLoginSuccess(user))
                    history.push('/profile')
                } 
            })
          }    
      } catch (error) {
        dispatch(modalShow({
            text: error.message
        }))
        dispatch(userLoginFailure("ERROR NOT LOGINED"))
      }
}

export const userRegisterThunk = (name, email, password, picture) => async (dispatch) => {
    
    try {
        dispatch(userRegisterReguest())
        const res = await firebase.register(name, email, password, picture)
        
        if(res) {
            dispatch(userRegisterSuccess())
            history.push('/login')
        }

    } catch (error) {
        dispatch(modalShow({
            title : "REGISTRATION PAGE",
            text: error.message
        }))
        dispatch(userRegisterFailure("ERROR NOT REGISTRATION"))
    }
}
export const userUpdateThunk = (data, picture) => async (dispatch) => {
    
    try {
        dispatch(userUpdateRequest())
        await firebase.update(data, picture)
        firebase.auth.onAuthStateChanged(user => {
            if(user) {
              localStorage.setItem('lp-user', JSON.stringify(user))
            }
            })
            dispatch(userUpdateSuccess())
            history.push('/profile')
    } catch (error) {
        dispatch(modalShow({
            title : "UPDATE PAGE",
            text: error.message
        }))
        dispatch(userUpdateFailure("ERROR NOT UPDATE"))
    }
}

export const userLogoutThunk = () => async (dispatch) => {
    try {
        dispatch(userLogoutRequest())
        const res = await firebase.logout()
        if(res) {
            dispatch(userLogoutSuccess())
        }
    } catch (error) {
        dispatch(userLogoutFailure("ERROR NOT LOGOUT"))
    }
}


export const userGetPhoneThunk = (id) => async (dispatch) => {
    try {
     if(id) {
        firebase.db.collection("phoneNumber").where("id", "==", id).onSnapshot(snapshot => {
            if(!snapshot.empty){
                const phone =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
                dispatch(userPhoneNumber(phone[0].phoneNumber))
            } else{
                dispatch(userPhoneNumber(null))
            }
        });
     }
    } catch (error) {
        dispatch(userLogoutFailure("ERROR NOT LOGOUT"))
    }
}