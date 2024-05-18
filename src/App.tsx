import './App.css';

import React, {useRef, useState} from 'react';

const App = () => {

    const [x, setX] = useState<number>(0);

    const y = useRef(0);

    console.log('work');

    return (
      <div>

          <button onClick={() => {setX((x) => x + 1)}}>change x {x}</button>
          <button onClick={() => {
              y.current++;
              console.log(y);
          }}>change y {y.current}</button>

      </div>
  );
};

export default App;
