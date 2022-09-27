import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    const saveCallback = useRef(null);

    useEffect( () => {
        saveCallback.current = callback;
    }, [callback]);

    useEffect( () => {
        const timer = setInterval(() => {
            saveCallback.current();
        }, delay);

        return () => clearInterval(timer);
    }, []);
};

export default useInterval;