import { CREATE_SERVICE_REQUEST,CREATE_SERVICE_SUCCESS,CREATE_SERVICE_FAILURE,
         UPDATE_SERVICE_REQUEST,UPDATE_SERVICE_SUCCESS,UPDATE_SERVICE_FAILURE,
         DELETE_SERVICE_REQUEST,DELETE_SERVICE_SUCCESS,DELETE_SERVICE_FAILURE,
         GET_SERVICE_LIST_REQUEST,GET_SERVICE_LIST_SUCCESS,GET_SERVICE_LIST_FAILURE,
         GET_SERVICES_BY_ID_REQUEST, GET_SERVICES_BY_ID_SUCCESS, GET_SERVICES_BY_ID_FAILURE,
         GET_SERVICES_BY_USER_REQUEST,GET_SERVICES_BY_USER_SUCCESS,GET_SERVICES_BY_USER_FAILURE,
         SERVICE_HANDLE_INPUTS , SERVISE_UPDATE_INPUTS   } from '../actions'

const defaultState = {
    serviceData : {
        comments : [],
        desciptpion : '',
        dislikes : [],
        likes : [],
        link : '',
        owner : {},
        serviceCategory : "",
        title : ""
    },
    services : [],
    serviseById : {},
    serviseByUser : [],
    error : null,
    isLoading : false
}

export default function loginReducer  (state = defaultState, action) {
   switch(action.type){
       case CREATE_SERVICE_REQUEST : 
            return {
            ...state,
            isLoading : true
       };
       case CREATE_SERVICE_SUCCESS : 
            return {
                ...state ,
                isLoading : false
        };
       case CREATE_SERVICE_FAILURE :
            return {
                ...state,
                isLoading : true,
                error : action.payload
            };
         case UPDATE_SERVICE_REQUEST :
             return {
                 ...state,
                 isLoading : true,
             };
         case UPDATE_SERVICE_SUCCESS :
             return {
                 ...state,
                 isLoading : false
             };
         case UPDATE_SERVICE_FAILURE :
             return {
                 ...state,
                 isLoading : true,
                 error : action.payload
             };
            case DELETE_SERVICE_REQUEST :
                return {
                    ...state,
                    isLoading : true
                };
            case DELETE_SERVICE_SUCCESS : 
            const newServices = state.services.filter(el =>{
                return el.id !== action.payload})
                return {
                    ...state,
                    isLoading : false,
                    services : newServices
                }
            case DELETE_SERVICE_FAILURE : 
                return {
                    ...state,
                    isLoading : true,
                    error : action.payload
                };
              case GET_SERVICE_LIST_REQUEST: 
                  return{
                      ...state,
                      isLoading : true,
                  };
              case GET_SERVICE_LIST_SUCCESS: 
                  return {
                      ...state,
                      isLoading : false,
                      services : action.payload
                  };
              case GET_SERVICE_LIST_FAILURE: 
                  return {
                      ...state,
                      isLoading : true,
                      error : action.payload
                  };
                  case GET_SERVICES_BY_ID_REQUEST: 
                  return{
                      ...state,
                      isLoading : true,
                  };
                    case GET_SERVICES_BY_ID_SUCCESS: 
                        return {
                            ...state,
                            isLoading : false,
                            serviseById : action.payload
                        };
                    case GET_SERVICES_BY_ID_FAILURE: 
                        return {
                            ...state,
                            isLoading : true,
                            error : action.payload
                        };
                        case GET_SERVICES_BY_USER_REQUEST: 
                        return{
                            ...state,
                            isLoading : true,
                        };
                          case GET_SERVICES_BY_USER_SUCCESS: 
                              return {
                                  ...state,
                                  isLoading : false,
                                  serviseByUser : action.payload
                              };
                          case GET_SERVICES_BY_USER_FAILURE: 
                              return {
                                  ...state,
                                  isLoading : true,
                                  error : action.payload
                              };
                        case SERVICE_HANDLE_INPUTS:
                            return {
                                ...state,
                                serviceData : action.payload
                            };
                            case SERVISE_UPDATE_INPUTS :
                                const findEvent = state.services.find((event) => {
                                    return event.id === action.payload})
                                    return {
                                        ...state,
                                        serviceData : findEvent
                                    }
                            default :
                            return state
   }
}