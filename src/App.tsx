import './App.css';
import React from 'react';
import { UsersComponent } from './components/UsersComponent';

const App = () => {
    const lift = (user: any) => {
        console.log(user);
    };

  return (
      <div>
          <UsersComponent liftProp={lift}/>
          <hr/>
      </div>
  );
};

export default App;
