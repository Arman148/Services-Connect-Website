import React from "react";
import firebase from '../vendor/sdk';
import API from "../vendor/sdk";

export function useAuth() {
  const [authUser, setAuthUser] = React.useState(null); 
  React.useEffect(() => {
   const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if(user) {
        setAuthUser(user);
        localStorage.setItem('lp-user', JSON.stringify(user))
        API.users.updateProfile({
          online: true
        });
        API.users.updateProfileOnDisconnect({
          online: false,
          lastOnline: Date.now()
        });
      } else {
        localStorage.removeItem('lp-user')
        setAuthUser(null);
      }
    })
    return () => unsubscribe();
  }, [])

  const user = JSON.parse(localStorage.getItem('lp-user'))
  return user;
}

export function getUser (callback)  {
  firebase.auth.onAuthStateChanged(user => {
    if(user) {
      callback(user)
    } 
    })
}