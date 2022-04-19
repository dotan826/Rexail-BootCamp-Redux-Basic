import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../redux/reducers/reducersTypes";
import {incrementFirstCounter} from "../redux/actions/actions";

const FirstCounter = function () {

    const firstCounter = useSelector((state: RootReducer) => state.firstCounterReducer.counter);
    const dispatch = useDispatch();


    return (
        <div className={"counter"}>
            <h3>Counter 1 :</h3>
            <button onClick={()=>{dispatch(incrementFirstCounter())}}>Increment</button>
            <p>{firstCounter}</p>
        </div>
    );
}

export default FirstCounter;
