import {Action} from '../actions/actionsTypes';
import {firstCounterReducerInitialState} from './reducersTypes';
import { Reducer } from 'redux';

const initialState: firstCounterReducerInitialState = {
    counter: 0
}

const firstCounterReducer: Reducer<firstCounterReducerInitialState, Action> = function(state= initialState, action: Action) {
    switch(action.type) {
        case "FIRST_COUNTER_INCREMENT":
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
};

export default firstCounterReducer;
