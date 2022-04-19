import {Action} from '../actions/actionsTypes';
import {thirdCounterReducerInitialState} from './reducersTypes';
import { Reducer } from 'redux';

const initialState: thirdCounterReducerInitialState = {
    counter: 0
}

const thirdCounterReducer: Reducer<thirdCounterReducerInitialState, Action> = function(state= initialState, action: Action) {
    switch(action.type) {
        case "THIRD_COUNTER_INCREMENT":
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
};

export default thirdCounterReducer;
