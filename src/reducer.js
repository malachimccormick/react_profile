import {
    combineReducers
} from 'redux';
import Parent from './Components/Parent/Parent'
import EmailPage from "./Components/Pages/Email";

const rootReducer = combineReducers({
   Parent,
   EmailPage
})
export default rootReducer;