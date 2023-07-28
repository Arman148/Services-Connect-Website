export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
export const USER_REGISTER_HANDLE_INPUTS = 'USER_REGISTER_HANDLE_INPUTS';
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_HANDLE_INPUTS = 'USER_LOGIN_HANDLE_INPUTS';
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';
export const USER_PHONE_NUMBER = 'USER_PHONE_NUMBER'

export const userPhoneNumber = (data) =>{
    return{
        type : USER_PHONE_NUMBER,
        payload : data
    }
}

export const userRegisterReguest = () =>{
    return{
        type : USER_REGISTER_REQUEST
    }
}

export const userRegisterSuccess = () =>{
    return{
        type : USER_REGISTER_SUCCESS
    }
}

export const userRegisterFailure = (data) =>{
    return{
        type : USER_REGISTER_FAILURE,
        payload : data
    }
}

export const userRegisterHandleInputs = (data) =>{
    return {
        type : USER_REGISTER_HANDLE_INPUTS,
        payload : data
    }
}

export const userUpdateRequest = () => {
    return {
        type : USER_UPDATE_REQUEST
    }
}

export const userUpdateSuccess = () => {
    return {
        type : USER_UPDATE_SUCCESS
    }
}


export const userUpdateFailure = (data) => {
    return {
        type : USER_UPDATE_FAILURE,
        payload : data
    }
}

export const userLoginRequest = () => {
    return {
        type : USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = (user) => {
    return {
        type : USER_LOGIN_SUCCESS,
        payload : user
    }
}

export const userLoginFailure = (data) => {
    return {
        type : USER_LOGIN_FAILURE,
        payload : data
    }
}

export const userLoginHandleInputs = (data) =>{
    return {
        type : USER_LOGIN_HANDLE_INPUTS,
        payload : data
    }
}

export const userLogoutRequest = () => {
    return {
        type : USER_LOGOUT_REQUEST
    }
}

export const userLogoutSuccess = () => {
    return {
        type : USER_LOGOUT_SUCCESS
    }
}

export const userLogoutFailure = (data) => {
    return {
        type : USER_LOGOUT_FAILURE,
        payload : data
    }
}