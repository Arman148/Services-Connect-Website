import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ContentRegistration from '../../components/ContentRegistration/ContentRegistration';
import { userRegisterThunk } from '../../thunks';
import './registration.style.css';

// const mapsProps = (state) => {
//     return {
//         isRegistered: state.user.isRegistered
//     }
// }





// const mapsDispatch = (dispatch) => {
//     return {
//         register: (data) => {
//             dispatch(userRegisterThunk(data))
//         }
//     }
// }


const mapStateToProps = (state) => ({
    user: state.user.user
})


const mapDispatchToProps = (dispatch) => ({
    register: (name, email, password, picture) => {
        dispatch(userRegisterThunk(name, email, password, picture))
    }
})

const Register = ({user, register}) => {
    // const onRegister = (data) => {
    //     props.register(data);
    // }
    
    return (
        <div>
            <Header />
            <ContentRegistration 
                onRegister={register} 
                user={user}
                // onRegister={onRegister}
            />
        </div>
    );
};

// export default connect(mapsProps, mapsDispatch)(Register);
export default connect(mapStateToProps, mapDispatchToProps)(Register);