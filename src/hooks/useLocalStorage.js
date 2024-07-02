import { useEffect, useState } from "react";


export function useLocalStorage(key, value) {
    const [val, setVal] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue != null) return JSON.parse(jsonValue);

        if (typeof value === "function") {
            return value();
        }
        else {
            return value;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val));
    },[key, val]);

    return [val, setVal];
}