import './App.css';

import React from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, reset} from "./redux/slices/slice1";

const App = () => {

    const {xxx} = useAppSelector(state => state.slice1);

    const dispatch = useAppDispatch();

  return (
      <div>
        <h2>{xxx}</h2>
          <button onClick={() => {
              dispatch(increment(100))
          }}>increment</button>
          <button onClick={() => {
              dispatch(decrement())
          }}>decrement</button>
          <button onClick={() => {
              dispatch(reset())
          }}>reset</button>
      </div>
  );
};

export default App;