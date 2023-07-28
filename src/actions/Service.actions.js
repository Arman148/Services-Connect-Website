export const CREATE_SERVICE_REQUEST = 'CREATE_SERVICE_REQUEST';
export const CREATE_SERVICE_SUCCESS = 'CREATE_SERVICE_SUCCESS';
export const CREATE_SERVICE_FAILURE = 'CREATE_SERVICE_FAILURE';
export const UPDATE_SERVICE_REQUEST = 'UPDATE_SERVICE_REQUEST';
export const UPDATE_SERVICE_SUCCESS = 'UPDATE_SERVICE_SUCCESS';
export const UPDATE_SERVICE_FAILURE = 'UPDATE_SERVICE_FAILURE';
export const DELETE_SERVICE_REQUEST = 'DELETE_SERVICE_REQUEST';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_FAILURE = 'DELETE_SERVICE_FAILURE';
export const SERVICE_HANDLE_INPUTS = 'SERVICE_HANDLE_INPUTS';
export const SERVISE_UPDATE_INPUTS = 'SERVISE_UPDATE_INPUTS';
export const GET_SERVICE_LIST_REQUEST = 'GET_SERVICE_LIST_REQUEST';
export const GET_SERVICE_LIST_SUCCESS = 'GET_SERVICE_LIST_SUCCESS';
export const GET_SERVICE_LIST_FAILURE = 'GET_SERVICE_LIST_FAILURE';
export const GET_SERVICES_BY_ID_REQUEST = 'ET_SERVICES_BY_ID_REQUEST';
export const GET_SERVICES_BY_ID_SUCCESS = 'ET_SERVICES_BY_ID_SUCCESS';
export const GET_SERVICES_BY_ID_FAILURE = 'ET_SERVICES_BY_ID_FAILURE';
export const GET_SERVICES_BY_USER_REQUEST = 'ET_SERVICES_BY_USER_REQUEST';
export const GET_SERVICES_BY_USER_SUCCESS = 'ET_SERVICES_BY_USER_SUCCESS';
export const GET_SERVICES_BY_USER_FAILURE = 'ET_SERVICES_BY_USER_FAILURE';

export const createServiceRequest = () => {
    return {
        type : CREATE_SERVICE_REQUEST
    }
}

export const createServiceSuccess = () => {
    return {
        type : CREATE_SERVICE_SUCCESS
    }
}

export const createServiceFailure = (data) => {
    return {
        type : CREATE_SERVICE_FAILURE,
        payload : data
    }
}

export const updateServiceRequest = () => {
    return {
        type : UPDATE_SERVICE_REQUEST
    }
}

export const updateServiceSuccess = () => {
    return {
        type : UPDATE_SERVICE_SUCCESS
    }
}

export const updateServiceFailure = (data) => {
    return {
        type : UPDATE_SERVICE_FAILURE,
        payload : data
    }
}

export const deleteServiceRequest = () => {
    return {
        type : DELETE_SERVICE_REQUEST
    }
}

export const deleteServiceSuccess = () => {
    return {
        type : DELETE_SERVICE_SUCCESS
    }
}

export const deleteServiceFailure = (data) => {
    return {
        type : DELETE_SERVICE_FAILURE,
        payload : data
    }
}

export const serviceHandleInputs = (data) =>{
    return {
        type : SERVICE_HANDLE_INPUTS,
        payload : data
    }
}

export const serviceUpdateInputs = (id) => {
    return {
        type : SERVISE_UPDATE_INPUTS,
        payload : id
    }
}

export const getServiceListRequest = () => {
    return{
        type : GET_SERVICE_LIST_REQUEST
    }
}

export const getServiceListSuccess = (data) => {
    return{
        type : GET_SERVICE_LIST_SUCCESS,
        payload : data
    }
}

export const getServiceListFailure = (data) => {
    return{
        type : GET_SERVICE_LIST_FAILURE,
        payload : data
    }
}

export const getServiceByIdRequest = () => {
    return {
        type : GET_SERVICES_BY_ID_REQUEST
    }
}

export const getServiceByIdSuccess = (data) => {
    return {
        type : GET_SERVICES_BY_ID_SUCCESS,
        payload : data
    }
}

export const getServiceByIdFailure = (data) => {
    return {
        type : GET_SERVICES_BY_ID_FAILURE,
        payload : data
    }
}

export const getServiceByUserRequest = () => {
    return {
        type : GET_SERVICES_BY_USER_REQUEST
    }
}

export const getServiceByUserSuccess = (data) => {
    return {
        type : GET_SERVICES_BY_USER_SUCCESS,
        payload : data
    }
}

export const getServiceByUserFailure = (data) => {
    return {
        type : GET_SERVICES_BY_USER_FAILURE,
        payload : data
    }
}