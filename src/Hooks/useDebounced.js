import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const idTimeOut = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(idTimeOut);

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [value]);
    return debouncedValue;
}

export default useDebounced;
