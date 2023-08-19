//here we combine all reducers in single reducer
import authReducer from './authReducer';
import projectReducer from './projectReducer';
//import the function that will combine our reducers in only one
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});
export default rootReducer;
