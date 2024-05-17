import './App.css';

import React, {useState} from 'react';

interface IState {
    value: number
}

const App = () => {

    const [counter, setCounter] = useState<IState>({value: 0})

    const increment = () => {
        // ПЕРШИЙ ВАРІАНТ (не по важливості):
        // setCounter({value: counter.value + 1});
            // Тут ми значення перепризначаємо {value: counter.value + 1}.
            // {value: counter.value + 1} - такий запис тому, що в нас параметризація через інтерфейс IState

        // ДРУГИЙ ВАРІАНТ (не по важливості):
        // Якщо ми працюємо з примітивними типами, то
        // counter.value = 100500;
            // тут ми в лоб визначили чому дорівнює значення
        // setCounter({...counter})
            // обовʼязково потрібна деструктуризація counter для того, щоб setCounter міг
            // працювати, по іншому він буде ТІЛЬКИ присвоювати 100500 для counter

        // ТРЕТІЙ ВАРІАНТ (не по важливості):
        setCounter(prevState => ({value: prevState.value + 1}))

    // ПІДСУМОК: Якщо потрібно впровадити значення на щось конкретне, то використовуємо setCounter і присвоюємо конкретне
    // значення. Якщо значення потрібно постійно оновлювати, то найкраще передавати через кол-бек ф-цію (3 варіант)
    };

    const decrement = () => {
        setCounter(prevState => ({value: prevState.value - 1}))
    };

    const reset = () => {
        setCounter({value: 0})
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
