import {Action} from '../actions/actionsTypes';
import {secondCounterReducerInitialState} from './reducersTypes';
import { Reducer } from 'redux';

const initialState: secondCounterReducerInitialState = {
    counter: 0
}

const secondCounterReducer: Reducer<secondCounterReducerInitialState, Action> = function(state= initialState, action: Action) {
    switch(action.type) {
        case "SECOND_COUNTER_INCREMENT":
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
};

export default secondCounterReducer;
