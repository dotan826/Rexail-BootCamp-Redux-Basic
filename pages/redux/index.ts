import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);    // Creating New Store

export default store;
