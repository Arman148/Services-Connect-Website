import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ContentLogin from '../../components/ContentLogin/ContentLogin';
import { userLoginThunk } from '../../thunks';


const Login = (props) => {
    const onLogin = (data) => {
        props.login(data)
    }
    return (
        <div>
            <Header />
            <ContentLogin onLogin={onLogin} isLogging={props.isLoading} />
        </div>
    );
};

const mapToProps = (state) => {
    return {
        isLogging: state.user.isLoading
    }
}

const mapToDispatch = (dispatch) => {
    return {
        login: (data) => {
            dispatch(userLoginThunk(data))
        }
    }
}

export default connect(
    mapToProps,
    mapToDispatch
)(Login);
