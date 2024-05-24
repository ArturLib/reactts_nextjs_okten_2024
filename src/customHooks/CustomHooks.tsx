import {useState, useRef, useEffect} from "react";


// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);
    function toggleValue (valueState: boolean) {
        setValue(prevValue => !valueState);
    }
    return [value, toggleValue];
};
let [value, toggleValue] = useToggle(true);

toggleValue(false);


// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
const usePrevious = <T, > (value: T): T | undefined => {
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T | undefined>();

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
    }

    return previousRef.current
}
usePrevious<number>(100);


// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
const useStorage = (key, localStorageObj, defaultValue) => {

    const [value, setValue] = useState(() => {
        let jsonValue = localStorageObj.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return localStorageObj.removeItem(key);
        localStorageObj.setItem(key, JSON.stringify(value));
    }, [key, value, localStorageObj]);

    return [value, setValue]
}
useStorage('asd', 'def', window.localStorage);