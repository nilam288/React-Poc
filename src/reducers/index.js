import {combineReducers} from 'redux';
import errorReducer from './ErrorReducer';
import projectReducer from './ProjectReducer';

export default combineReducers({

    error:errorReducer,
    projects:projectReducer
});