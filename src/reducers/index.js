import {combineReducers} from 'redux';
import serviceReducer from './service.reducer';
import userReducer from './user.reducers';
import commonReducer from './common.reducer'


export default combineReducers({
 user : userReducer,
 service : serviceReducer,
 common : commonReducer
})