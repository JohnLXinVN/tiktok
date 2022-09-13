import { useEffect, useState } from "react";


function useDebounced(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => { setDebouncedValue(value) }, delay)

        return () => clearTimeout(handle)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedValue
}

export default useDebounced;