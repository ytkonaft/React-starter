import { combineReducers } from 'redux';
import Auth from './modules/Auth';

const PlatformReducer = combineReducers({
  Auth
});

export default PlatformReducer;
