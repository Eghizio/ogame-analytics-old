import { useState } from "react";


const useLocalStorage = (key: string, initialValue: any) => {
    const [localValue, setLocalValue] = useState<any>(() => {
        try{
            const localStorageValue = window.localStorage.getItem(key);

            if(!localStorageValue) 
                window.localStorage.setItem(key, JSON.stringify(initialValue));

            return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
        }catch(error){
            console.log(`Couldn't get local storage for ${key} key.`);
            console.error(error.message);

            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const updateLocalStorage = (newValue: any) => {
        try{
            const value = newValue instanceof Function ? newValue(localValue) : newValue;
            localStorage.setItem(key, JSON.stringify(value));
            setLocalValue(value);
        }catch(error){
            console.log(`Couldn't set local storage for ${key} key.`);
            console.error(error.message);
        }
    };

    return [localValue, updateLocalStorage];
};


export default useLocalStorage;