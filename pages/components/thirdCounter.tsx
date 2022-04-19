import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../redux/reducers/reducersTypes";
import {incrementThirdCounter} from "../redux/actions/actions";

const ThirdCounter = function () {

    const thirdCounter = useSelector((state: RootReducer) => state.thirdCounterReducer.counter);
    const dispatch = useDispatch();


    return (
        <div className={"counter"}>
            <h3>Counter 3 :</h3>
            <button onClick={()=>{dispatch(incrementThirdCounter())}}>Increment</button>
            <p>{thirdCounter}</p>
        </div>
    );
}

export default ThirdCounter;
