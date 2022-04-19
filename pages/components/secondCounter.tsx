import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../redux/reducers/reducersTypes";
import {incrementSecondCounter} from "../redux/actions/actions";

const SecondCounter = function () {

    const secondCounter = useSelector((state: RootReducer) => state.secondCounterReducer.counter);
    const dispatch = useDispatch();


    return (
        <div className={"counter"}>
            <h3>Counter 2 :</h3>
            <button onClick={()=>{dispatch(incrementSecondCounter())}}>Increment</button>
            <p>{secondCounter}</p>
        </div>
    );
}

export default SecondCounter;
