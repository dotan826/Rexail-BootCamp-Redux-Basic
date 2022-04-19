import { combineReducers } from 'redux';
import firstCounterReducer from './reducerFirstCounter';
import secondCounterReducer from './reducerSecondCounter';
import thirdCounterReducer from './reducerThirdCounter';

export default combineReducers({  // Combining Multiple Reducers
    firstCounterReducer,
    secondCounterReducer,
    thirdCounterReducer
});
