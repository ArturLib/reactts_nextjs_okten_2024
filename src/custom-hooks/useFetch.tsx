import {useEffect, useState} from "react";

const useFetch = <T,>(endpoint: string, initValue: T) => {
    const [array, setArray] = useState<T>(initValue);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + endpoint)
            .then(value => value.json())
            .then(value => {setArray(value)});
    }, []);

    return array;
}

export {useFetch};

// Якщо функція useFetch не називатиметься з префіксом use от всередині useState використати буде не можливо