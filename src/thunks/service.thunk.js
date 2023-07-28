import firebase from '../vendor/sdk';
import {updateServiceRequest,updateServiceSuccess,updateServiceFailure,
        deleteServiceRequest,deleteServiceSuccess,deleteServiceFailure,
        createServiceRequest,createServiceSuccess,createServiceFailure,
        getServiceListRequest, getServiceListSuccess, getServiceListFailure,
        getServiceByUserRequest,getServiceByUserSuccess,getServiceByUserFailure,
        getServiceByIdRequest, getServiceByIdSuccess, getServiceByIdFailure ,} from '../actions'



export const serviceUpdateThunk = (id,data) => async (dispatch) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(updateServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.update(data)
        } dispatch(updateServiceSuccess())
    } catch (error) {
        dispatch(updateServiceFailure("ERROR SERVICE NOT UPTADED"))
    }
}


    
    export const serviceGetByIdThunk = (id) => async (dispatch) => {
        try {
            if(id){
            dispatch(getServiceByIdRequest())
           firebase.db.collection("service").doc(id).onSnapshot(snapshot => {
               const newService =  snapshot.data()
               dispatch(getServiceByIdSuccess(newService))
           });
          } else {
             dispatch(getServiceByIdSuccess({}))
          }
        } catch (error) {
            dispatch(getServiceByIdFailure("ERROR"))
        }
    }

    export const serviceGetByUserThunk = (id) => async (dispatch) => {
        try {
            dispatch(getServiceByUserRequest())
           firebase.db.collection("service").where("owner.id", "==", id).onSnapshot(snapshot => {
               const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
               dispatch(getServiceByUserSuccess(newService))
           });
        } catch (error) {
            dispatch(getServiceByUserFailure("ERROR"))
        }
    }

export const serviceGetThunk = () => async (dispatch) => {
    try {
        dispatch(getServiceListRequest())
       firebase.db.collection("service").onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(getServiceListFailure("ERROR"))
    }
}

export const serviceGetCategoriesThunk = (category) => async (dispatch) => {
    try {
        dispatch(getServiceListRequest())
       firebase.db.collection("service").where("serviceCategory", "==", category).onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(getServiceListFailure("ERROR"))
    }
}



export const serviceDeleteThunk = (id) => async (dispatch) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(deleteServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.delete()
        } dispatch(deleteServiceSuccess(id))
    } catch (error) {
        dispatch(deleteServiceFailure("ERROR SERVICE NOT DELETED"))
    }
}

export const servicesCreateThunk = (data) => async (dispatch) => {
    try {
        dispatch(createServiceRequest())
       await firebase.db.collection('service').add(data)
        dispatch(createServiceSuccess())
    } catch (error) {
        dispatch(createServiceFailure("ERROR NOT CREATE SERVICE"))
    }
}