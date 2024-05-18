import './App.css';

import React, {useReducer} from 'react';

interface CounterState {
    count: number
}

interface CounterAction {
    type: string,
    payload: number
}

const callbackReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'inc':
            state.count += action.payload;
            return {...state}
        case 'dec':
            state.count -= action.payload;
            return {...state}
        case 'res':
            state.count = action.payload;
            return {...state}
    }
    return {count: -100500};
};

const App = () => {

    const [state, dispatch] = useReducer(callbackReducer, {count: 0})

    return (
      <div>
          <h2>{state.count}</h2>
          <button onClick={() => {dispatch({type: 'inc', payload: 100})}}>inc</button>
          <button onClick={() => {dispatch({type: 'dec', payload: 200})}}>dec</button>
          <button onClick={() => {dispatch({type: 'res', payload: -278562976})}}>res</button>
      </div>
  );
};

export default App;