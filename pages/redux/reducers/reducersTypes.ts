export interface firstCounterReducerInitialState {
    counter: number;
}

export interface secondCounterReducerInitialState {
    counter: number;
}

export interface thirdCounterReducerInitialState {
    counter: number;
}




export interface RootReducer {
    firstCounterReducer: firstCounterReducerInitialState;
    secondCounterReducer: secondCounterReducerInitialState;
    thirdCounterReducer: thirdCounterReducerInitialState;
}

