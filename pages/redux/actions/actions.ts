
import {FIRST_COUNTER_INCREMENT, SECOND_COUNTER_INCREMENT, THIRD_COUNTER_INCREMENT} from './actionsTypes';


export const incrementFirstCounter = function () {
    return {
        type: FIRST_COUNTER_INCREMENT
    };
}

export const incrementSecondCounter = function () {
    return {
        type: SECOND_COUNTER_INCREMENT
    };
}

export const incrementThirdCounter = function () {
    return {
        type: THIRD_COUNTER_INCREMENT
    };
}


