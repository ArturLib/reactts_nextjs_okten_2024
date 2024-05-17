import './App.css';

import React, {useReducer, useState} from 'react';

interface IState {
    value: number
}

function reducer(state: IState, action: {type: string, payload: number}) {
    
}
// state: IState - це початкове значення яке ми вказуємо в useReducer (а саме - {value: 0})

const App = () => {

    const [counter, dispatch] = useReducer<any>(reducer, {value: 0})
    // counter по замовчуванню буде дорівнювати {value: 0} він жеж і є state: IState (з 9 строки ф-ція reducer)
    // dispatch виконує функцію setState з useState

    const increment = () => {
        dispatch({type: 'inc', payload: 1})
        // dispatch({}) - сюди приходить значення action: {type: string, payload: number} з 9 строки
    };

    const decrement = () => {

    };

    const reset = () => {

    };

    return (
      <div>
          <h2>{counter.value}</h2>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>reset</button>
      </div>
  );
};

export default App;
